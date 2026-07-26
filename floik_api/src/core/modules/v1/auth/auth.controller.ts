import crypto from 'crypto';
import { Request, Response } from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../../../../config';
import { prisma } from '../../../../packages/prisma';

const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.SECRET;
const REDIRECT_URI = config.REDIRECT_URI;
const JWT_SECRET = config.JWT_SECRET;
const GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = config.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = config.GOOGLE_REDIRECT_URI;

export const getMicrosoftAuthUrl = async (req: Request, res: Response) => {
  const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
  
  if (settings?.portalType !== 'MINECRAFT' || !settings?.allowMicrosoftAuth) {
    return res.status(403).json({ error: 'Microsoft authentication is only available for Minecraft portals' });
  }

  const state = crypto.randomUUID();
  res.cookie('oauth_state', state, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 10 * 60 * 1000, sameSite: 'lax' });

  const url = `https://login.live.com/oauth20_authorize.srf?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=XboxLive.signin%20offline_access&state=${state}`;
  res.redirect(url);
};

export const handleMicrosoftCallback = async (req: Request, res: Response) => {
  const { code, state } = req.query;
  const cookieState = req.cookies?.oauth_state;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  if (!state || state !== cookieState) {
    return res.status(403).json({ error: 'Invalid state parameter. CSRF validation failed.' });
  }
  res.clearCookie('oauth_state');

  const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
  if (settings && settings.allowMicrosoftAuth === false) {
    return res.status(403).json({ error: 'Microsoft authentication is not enabled for this portal' });
  }

  try {
    console.log('--- Auth Callback Started ---');
    console.log('Exchanging code for token...');

    // 1. Get OAuth Token
    const tokenRes = await axios.post('https://login.live.com/oauth20_token.srf', 
      new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        code: code as string,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    ).catch(e => {
      console.error('MS Token Error:', e.response?.data || e.message);
      throw e;
    });

    const accessToken = tokenRes.data.access_token;
    console.log('Got Access Token. Authenticating with Xbox Live...');

    // 2. Authenticate with Xbox Live
    const xblRes = await axios.post('https://user.auth.xboxlive.com/user/authenticate', {
      Properties: {
        AuthMethod: 'RPS',
        SiteName: 'user.auth.xboxlive.com',
        RpsTicket: `d=${accessToken}`,
      },
      RelyingParty: 'http://auth.xboxlive.com',
      TokenType: 'JWT',
    }).catch(e => {
      console.error('XBL Auth Error:', e.response?.data || e.message);
      throw e;
    });

    const xblToken = xblRes.data.Token;
    const userHash = xblRes.data.DisplayClaims.xui[0].uhs;
    console.log('Got XBL Token. Getting XSTS Token...');

    // 3. Get XSTS Token
    const xstsRes = await axios.post('https://xsts.auth.xboxlive.com/xsts/authorize', {
      Properties: {
        SandboxId: 'RETAIL',
        UserTokens: [xblToken],
      },
      RelyingParty: 'http://xboxlive.com',
      TokenType: 'JWT',
    }).catch(e => {
      console.error('XSTS Auth Error:', e.response?.data || e.message);
      throw e;
    });

    const xstsToken = xstsRes.data.Token;
    const xui = xstsRes.data.DisplayClaims.xui[0];
    const xid = xui.xid;
    console.log(`Got XSTS Token for XID: ${xid}. Fetching User Profile Settings...`);

    // 4. Get User Profile Settings
    const profileRes = await axios.post(`https://profile.xboxlive.com/users/batch/profile/settings`, {
      userIds: [xid],
      settings: ['Gamertag'],
    }, {
      headers: {
        'x-xbl-contract-version': '2',
        'Authorization': `XBL3.0 x=${userHash};${xstsToken}`,
      },
    }).catch(e => {
      console.error('Profile Fetch Error:', e.response?.data || e.message);
      throw e;
    });

    const xboxUser = profileRes.data.profileUsers[0];
    const gamertag = xboxUser.settings.find((s: any) => s.id === 'Gamertag')?.value;
    const xboxId = xboxUser.id;
    console.log(`Authenticated as: ${gamertag} (${xboxId}). Syncing with DB...`);

    // 5. Create or Update User in DB
    const user = await prisma.user.upsert({
      where: { xboxId: String(xboxId) },
      update: { username: gamertag },
      create: {
        xboxId: String(xboxId),
        username: gamertag,
        role: 'USER',
      },
    }).catch((e: any) => {
      console.error('Prisma Upsert Error:', e);
      throw e;
    });

    // 5b. Auto-create Profile if not exists
    await prisma.profile.upsert({
      where: { userId: user.id },
      update: {},
      create: { userId: user.id },
    });

    // 6. Fetch user with profile and roles
    const userWithProfile = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        profile: { select: { displayName: true, bio: true, profilePicture: true } },
        userRoles: {
          include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
        },
      },
    });

    // 7. Issue JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });
    console.log('--- Auth Callback Successful ---');

    const { profile, userRoles, ...userData } = userWithProfile!;
    res.json({
      token,
      user: {
        ...userData,
        displayName: profile?.displayName ?? null,
        bio: profile?.bio ?? null,
        profilePicture: profile?.profilePicture ?? null,
        userRoles,
      },
    });
  } catch (error: any) {
    console.error('Auth Error Final:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Authentication failed'
    });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
  if (settings && settings.allowEmailAuth === false) {
    return res.status(403).json({ error: 'Email authentication is not enabled for this portal' });
  }

  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Email, password, and username are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        authProvider: 'EMAIL',
        profile: { create: {} },
      },
      include: {
        profile: { select: { displayName: true, bio: true, profilePicture: true } },
        userRoles: {
          include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
        },
      },
    });

    // Assign default role
    const defaultRole = await prisma.role.findFirst({ where: { isDefault: true } });
    if (defaultRole) {
      await prisma.userRole.create({ data: { userId: user.id, roleId: defaultRole.id } });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });

    const { profile, userRoles, passwordHash: _, ...userData } = user;
    res.status(201).json({
      token,
      user: {
        ...userData,
        displayName: profile?.displayName ?? null,
        bio: profile?.bio ?? null,
        profilePicture: profile?.profilePicture ?? null,
        userRoles,
      },
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ error: 'Failed to register' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
  if (settings && settings.allowEmailAuth === false) {
    return res.status(403).json({ error: 'Email authentication is not enabled for this portal' });
  }

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: { select: { displayName: true, bio: true, profilePicture: true } },
        userRoles: {
          include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
        },
      },
    });

    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });

    const { profile, userRoles, passwordHash: _, ...userData } = user;
    res.json({
      token,
      user: {
        ...userData,
        displayName: profile?.displayName ?? null,
        bio: profile?.bio ?? null,
        profilePicture: profile?.profilePicture ?? null,
        userRoles,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
  res.json({ message: 'Logged out successfully' });
};

export const getMe = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          select: { displayName: true, bio: true, profilePicture: true },
        },
        userRoles: {
          include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { profile, userRoles, ...userData } = user;
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    res.json({
      ...userData,
      token,
      displayName: profile?.displayName ?? null,
      bio: profile?.bio ?? null,
      profilePicture: profile?.profilePicture ?? null,
      userRoles,
    });
  } catch (error) {
    console.error('Get Me Error:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { displayName, bio } = req.body;

  try {
    const profile = await prisma.profile.upsert({
      where: { userId },
      update: {
        ...(displayName !== undefined && { displayName }),
        ...(bio !== undefined && { bio }),
      },
      create: {
        userId,
        displayName: displayName ?? null,
        bio: bio ?? null,
      },
    });

    res.json({
      displayName: profile.displayName,
      bio: profile.bio,
    });
  } catch (error) {
    console.error('Update Profile Error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

export const getGoogleAuthUrl = async (req: Request, res: Response) => {
  const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });

  if (settings?.portalType !== 'GENERIC' || !settings?.allowGoogleAuth) {
    return res.status(403).json({ error: 'Google authentication is not enabled for this portal' });
  }

  const state = crypto.randomUUID();
  res.cookie('oauth_state', state, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 10 * 60 * 1000, sameSite: 'lax' });

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}&response_type=code&scope=openid%20email%20profile&access_type=offline&state=${state}`;
  res.redirect(url);
};

export const handleGoogleCallback = async (req: Request, res: Response) => {
  const { code, state } = req.query;
  const cookieState = req.cookies?.oauth_state;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  if (!state || state !== cookieState) {
    return res.status(403).json({ error: 'Invalid state parameter. CSRF validation failed.' });
  }
  res.clearCookie('oauth_state');

    const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
    if (settings && settings.allowGoogleAuth === false) {
      return res.status(403).json({ error: 'Google authentication is not enabled for this portal' });
    }

  try {
    // 1. Exchange code for tokens
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token',
      new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID!,
        client_secret: GOOGLE_CLIENT_SECRET!,
        code: code as string,
        grant_type: 'authorization_code',
        redirect_uri: GOOGLE_REDIRECT_URI,
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { id_token, access_token } = tokenRes.data;

    // 2. Get user info from Google
    const userInfoRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const { id: googleId, email, name, picture } = userInfoRes.data;

    if (!email) {
      return res.status(400).json({ error: 'Google account must have an email address' });
    }

    // 3. Create or update user
    const user = await prisma.user.upsert({
      where: { email },
      update: { username: name || email.split('@')[0] },
      create: {
        email,
        username: name || email.split('@')[0],
        authProvider: 'GOOGLE',
        profile: { create: { displayName: name, profilePicture: picture } },
      },
      include: {
        profile: { select: { displayName: true, bio: true, profilePicture: true } },
        userRoles: {
          include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
        },
      },
    });

    // Assign default role
    const existingRoles = await prisma.userRole.findFirst({ where: { userId: user.id } });
    if (!existingRoles) {
      const defaultRole = await prisma.role.findFirst({ where: { isDefault: true } });
      if (defaultRole) {
        await prisma.userRole.create({ data: { userId: user.id, roleId: defaultRole.id } });
      }
    }

    // 4. Issue JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 7 * 24 * 60 * 60 * 1000 });

    const { profile, userRoles, passwordHash: _, ...userData } = user;
    res.json({
      token,
      user: {
        ...userData,
        displayName: profile?.displayName ?? null,
        bio: profile?.bio ?? null,
        profilePicture: profile?.profilePicture ?? null,
        userRoles,
      },
    });
  } catch (error: any) {
    console.error('Google Auth Error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Google authentication failed'
    });
  }
};

export const getPublicProfile = async (req: Request, res: Response) => {
  const username = req.params.username as string;

  try {
    const user = await prisma.user.findFirst({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: user.id },
      select: { displayName: true, bio: true, profilePicture: true },
    });

    const userRoles = await prisma.userRole.findMany({
      where: { userId: user.id },
      include: { role: { select: { id: true, name: true, color: true, position: true, permissions: true } } },
    });

    res.json({
      id: user.id,
      username: user.username,
      xboxId: user.xboxId,
      role: user.role,
      displayName: profile?.displayName ?? null,
      bio: profile?.bio ?? null,
      profilePicture: profile?.profilePicture ?? null,
      createdAt: user.createdAt,
      userRoles,
    });
  } catch (error) {
    console.error('Get Public Profile Error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};
