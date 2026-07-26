import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.forumPost.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            role: true,
            profile: { select: { displayName: true, profilePicture: true } },
            userRoles: {
              include: { 
                role: { 
                  select: { name: true, color: true, position: true } 
                } 
              },
              orderBy: { role: { position: 'asc' } }
            }
          }
        },
        reactions: {
          select: { emoji: true, userId: true }
        },
        _count: {
          select: { comments: true }
        }
      },
      orderBy: [
        { pinned: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    res.json({ posts });
  } catch (error) {
    console.error('Fetch Posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const userId = (req as any).user.userId;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    // Optional: Check if community posting is enabled in settings
    const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
    if (settings && !settings.forumEnabled) {
        return res.status(403).json({ error: 'Forum posting is currently disabled' });
    }

    const post = await prisma.forumPost.create({
      data: {
        title,
        content,
        authorId: userId
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            role: true,
            profile: { select: { displayName: true, profilePicture: true } },
            userRoles: {
              include: { 
                role: { 
                  select: { name: true, color: true, position: true } 
                } 
              },
              orderBy: { role: { position: 'asc' } }
            }
          }
        },
        reactions: true,
        _count: {
          select: { comments: true }
        }
      }
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Create Post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const post = await prisma.forumPost.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            role: true,
            profile: { select: { displayName: true, profilePicture: true } },
            userRoles: {
              include: { 
                role: { 
                  select: { name: true, color: true, position: true } 
                } 
              },
              orderBy: { role: { position: 'asc' } }
            }
          }
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                role: true,
                profile: { select: { displayName: true, profilePicture: true } },
                userRoles: {
                  include: { 
                    role: { 
                      select: { name: true, color: true, position: true } 
                    } 
                  },
                  orderBy: { role: { position: 'asc' } }
                }
              }
            },
            reactions: true
          },
          orderBy: { createdAt: 'asc' }
        },
        reactions: true,
        _count: {
          select: { comments: true }
        }
      }
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Fetch Post details error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
