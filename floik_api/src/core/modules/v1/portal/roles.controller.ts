import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { logger } from '../../../../utils/logger';

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { position: 'asc' },
      include: {
        _count: {
          select: { users: true }
        }
      }
    });
    res.json(roles);
  } catch (error) {
    logger.error({ err: error }, 'Get all roles error');
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createRole = async (req: Request, res: Response) => {
  const { name, description, color, permissions, isDefault } = req.body;
  try {
    const lastRole = await prisma.role.findFirst({
      orderBy: { position: 'desc' }
    });
    const position = lastRole ? lastRole.position + 1 : 0;

    const role = await prisma.role.create({
      data: {
        name,
        description,
        color,
        permissions,
        isDefault,
        position
      }
    });
    res.status(201).json(role);
  } catch (error) {
    logger.error({ err: error }, 'Create role error');
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateRole = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { name, description, color, permissions, isDefault } = req.body;
  try {
    const role = await prisma.role.update({
      where: { id },
      data: {
        name,
        description,
        color,
        permissions,
        isDefault
      }
    });
    res.json(role);
  } catch (error) {
    logger.error({ err: error }, 'Update role error');
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    await prisma.role.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    logger.error({ err: error }, 'Delete role error');
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const reorderRoles = async (req: Request, res: Response) => {
  const { orderedIds } = req.body;
  try {
    await Promise.all(
      orderedIds.map((id: string, index: number) =>
        prisma.role.update({
          where: { id },
          data: { position: index }
        })
      )
    );
    res.status(204).send();
  } catch (error) {
    logger.error({ err: error }, 'Reorder roles error');
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUserRoles = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const { roleIds } = req.body;
  try {
    // Delete existing roles
    await prisma.userRole.deleteMany({
      where: { userId }
    });

    // Create new roles
    if (roleIds && roleIds.length > 0) {
      await prisma.userRole.createMany({
        data: roleIds.map((roleId: string) => ({
          userId,
          roleId
        }))
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          select: { displayName: true, profilePicture: true }
        },
        userRoles: {
          include: { role: true }
        }
      }
    });

    res.json(user);
  } catch (error) {
    logger.error({ err: error }, 'Update user roles error');
    res.status(500).json({ error: 'Internal server error' });
  }
};
