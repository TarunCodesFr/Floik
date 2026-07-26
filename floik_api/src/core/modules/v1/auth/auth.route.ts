import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { 
  getMicrosoftAuthUrl, 
  handleMicrosoftCallback,
  register,
  login,
  logout,
  getMe,
  updateProfile,
  getGoogleAuthUrl,
  handleGoogleCallback,
  getPublicProfile
} from './auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', authenticate, getMe);
router.patch('/me', authenticate, updateProfile);

router.get('/microsoft', getMicrosoftAuthUrl);
router.get('/microsoft/callback', handleMicrosoftCallback);

router.get('/google', getGoogleAuthUrl);
router.get('/google/callback', handleGoogleCallback);

router.get('/profile/:username', getPublicProfile);

export default router;
