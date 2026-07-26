import { Request, Response, NextFunction } from 'express';
import { prisma } from '../packages/prisma';
import { logger } from '../utils/logger';
import { hasPermission } from '../utils/permissions';

export function requirePermission(permission: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const jwtUser = (req as any).user;
    if (!jwtUser?.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: jwtUser.userId },
        include: {
          userRoles: {
            include: {
              role: {
                select: { permissions: true },
              },
            },
          },
        },
      });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!hasPermission(user, permission)) {
        return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
      }

      (req as any).user = { ...user, userId: user.id };
      next();
    } catch (error) {
      logger.error({ err: error }, 'Permission check error');
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
