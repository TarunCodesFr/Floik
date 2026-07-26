import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';

export const createComment = async (req: Request, res: Response) => {
  const uuid = req.params.uuid as string;
  const { content } = req.body;
  const userId = (req as any).user.userId;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const post = await prisma.forumPost.findUnique({ where: { id: uuid } });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (post.locked) return res.status(403).json({ error: 'Thread is locked' });

    const comment = await prisma.forumComment.create({
      data: {
        content,
        postId: uuid,
        authorId: userId
      }
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error('Create Comment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const commentId = req.params.commentId as string;
  const user = (req as any).user;

  try {
    const comment = await prisma.forumComment.findUnique({ where: { id: commentId } });
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    // Permission check: Admin or author
    if (user.role !== 'ADMIN' && comment.authorId !== user.userId) {
       // We could also check custom permissions here if needed
       return res.status(403).json({ error: 'Forbidden' });
    }

    await prisma.forumComment.delete({ where: { id: commentId } });
    res.status(204).send();
  } catch (error) {
    console.error('Delete Comment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const toggleReaction = async (req: Request, res: Response) => {
  const { emoji, targetType, targetId } = req.body;
  const userId = (req as any).user.userId;

  if (!emoji || !targetType || !targetId) {
    return res.status(400).json({ error: 'Missing reaction data' });
  }

  try {
    const where: any = {
      emoji,
      userId,
    };

    if (targetType === 'post') where.postId = targetId;
    else if (targetType === 'comment') where.commentId = targetId;
    else return res.status(400).json({ error: 'Invalid target type' });

    const existing = await prisma.forumReaction.findFirst({ where });

    if (existing) {
      await prisma.forumReaction.delete({ where: { id: existing.id } });
      return res.json({ removed: true });
    } else {
      const data: any = { emoji, userId };
      if (targetType === 'post') data.postId = targetId;
      else data.commentId = targetId;

      const reaction = await prisma.forumReaction.create({ data });
      return res.status(201).json(reaction);
    }
  } catch (error) {
    console.error('Toggle Reaction error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
