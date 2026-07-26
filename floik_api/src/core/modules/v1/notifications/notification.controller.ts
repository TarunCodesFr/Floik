import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { hasPermission } from '../../../../utils/permissions';

export const getMyNotifications = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const notifications = await prisma.notification.findMany({
      where: {
        OR: [
          { userId: userId },
          { userId: null } // Global notifications
        ]
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notifications' });
  }
};

export const markAsRead = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const userId = (req as any).user?.userId;

    const notification = await prisma.notification.findUnique({ where: { id } });

    if (!notification) return res.status(404).json({ message: 'Not found' });
    if (notification.userId && notification.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await prisma.notification.update({
      where: { id },
      data: { isRead: true }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark notification as read' });
  }
};

export const createNotification = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!hasPermission(user, 'notifications:send')) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }

    const { userId, title, message, type, link } = req.body;

    const notification = await prisma.notification.create({
      data: {
        userId: userId || null, // null means global
        title,
        message,
        type: type || 'INFO',
        link
      }
    });

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create notification' });
  }
};

export const deleteNotification = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user = (req as any).user;

    const notification = await prisma.notification.findUnique({ where: { id } });
    if (!notification) return res.status(404).json({ message: 'Not found' });

    if (notification.userId !== user.userId && !hasPermission(user, 'notifications:delete')) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }

    await prisma.notification.delete({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete notification' });
  }
};
