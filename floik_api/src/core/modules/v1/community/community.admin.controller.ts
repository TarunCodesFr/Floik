import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { hasPermission } from '../../../../utils/permissions';

export const getAdminPosts = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'community:manage')) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const search = req.query.search as string;
  const status = req.query.status as string;
  const skip = (page - 1) * limit;

  try {
    const where: any = {};
    if (search) {
      where.title = { contains: search, mode: 'insensitive' };
    }
    if (status === 'pinned') where.pinned = true;
    if (status === 'locked') where.locked = true;

    const [posts, total] = await Promise.all([
      prisma.forumPost.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              username: true,
              role: true,
              profile: { select: { displayName: true, profilePicture: true } }
            }
          },
          _count: {
            select: { comments: true, reactions: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.forumPost.count({ where })
    ]);

    res.json({
      posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Fetch Admin Posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = (req as any).user;
  if (!hasPermission(user, 'community:manage')) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    await prisma.forumPost.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Delete Post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePostStatus = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { pinned, locked } = req.body;
  const user = (req as any).user;
  if (!hasPermission(user, 'community:manage')) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const post = await prisma.forumPost.update({
      where: { id },
      data: { pinned, locked }
    });
    res.json(post);
  } catch (error) {
    console.error('Update Post Status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
