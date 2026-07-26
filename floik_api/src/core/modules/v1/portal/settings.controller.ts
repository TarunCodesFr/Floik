import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';

export const getSettings = async (req: Request, res: Response) => {
  try {
    let settings = await prisma.portalSettings.findUnique({
      where: { id: 'singleton' },
    });

    if (!settings) {
      settings = await prisma.portalSettings.create({
        data: {
          id: 'singleton',
          portalType: 'GENERIC',
          siteName: 'Floik',
          allowEmailAuth: true,
          allowGoogleAuth: true,
          allowMicrosoftAuth: true,
        },
      });
    }

    res.json(settings);
  } catch (error) {
    console.error('Fetch Settings Error:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};

export const updateSettings = async (req: Request, res: Response) => {
  const { siteName, portalType, allowEmailAuth, allowGoogleAuth, allowMicrosoftAuth, forumEnabled, forumPostingRole } = req.body;

  try {
    const settings = await prisma.portalSettings.upsert({
      where: { id: 'singleton' },
      update: {
        siteName,
        portalType,
        allowEmailAuth,
        allowGoogleAuth,
        allowMicrosoftAuth,
        forumEnabled,
        forumPostingRole,
      },
      create: {
        id: 'singleton',
        siteName,
        portalType: portalType || 'GENERIC',
        allowEmailAuth,
        allowGoogleAuth,
        allowMicrosoftAuth,
        forumEnabled,
        forumPostingRole,
      }
    });
    res.json(settings);
  } catch (error) {
    console.error('Update Settings Error:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
};
