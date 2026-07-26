import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { hasPermission } from '../../../../utils/permissions';

export const getAnnouncements = async (req: Request, res: Response) => {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
};

export const createAnnouncement = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'announcements:manage')) {
    return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
  }
  const { title, content, type, link, linkText, gradient } = req.body;
  try {
    const announcement = await prisma.announcement.create({
      data: { title, content, type, link, linkText, gradient },
    });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create announcement' });
  }
};

export const updateAnnouncement = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'announcements:manage')) {
    return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
  }
  const id = req.params.id as string;
  const { title, content, type, isActive, link, linkText, gradient } = req.body;
  try {
    const announcement = await prisma.announcement.update({
      where: { id },
      data: { title, content, type, isActive, link, linkText, gradient },
    });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update announcement' });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'announcements:manage')) {
    return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
  }
  const id = req.params.id as string;
  try {
    await prisma.announcement.delete({ where: { id } });
    res.json({ message: 'Announcement deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete announcement' });
  }
};
