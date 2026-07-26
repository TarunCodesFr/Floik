import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { hasPermission } from '../../../../utils/permissions';
import { SubmissionStatus } from '../../../../generated/prisma';

export const submitPortalForm = async (req: Request, res: Response) => {
  const { formId, content } = req.body;
  const userId = (req as any).user?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!formId || !content) {
    return res.status(400).json({ error: 'Missing required fields: formId and content' });
  }

  try {
    const submission = await prisma.submission.create({
      data: {
        userId,
        formId,
        content,
        status: 'PENDING',
      },
    });

    res.status(201).json(submission);
  } catch (error) {
    console.error('Submission Error:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
};

export const getMySubmissions = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const submissions = await prisma.submission.findMany({
      where: { userId },
      include: { form: { select: { title: true, icon: true, color: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.json(submissions);
  } catch (error) {
    console.error('Fetch Submissions Error:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};
export const getAllSubmissions = async (req: Request, res: Response) => {
  const user = (req as any).user;

  if (!hasPermission(user, 'submissions:view')) {
    return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
  }

  try {
    const submissions = await prisma.submission.findMany({
      include: {
        user: {
          select: {
            username: true,
            xboxId: true,
            profile: { select: { profilePicture: true } },
          }
        },
        form: {
          select: {
            title: true,
            icon: true,
            color: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(submissions);
  } catch (error) {
    console.error('Fetch All Submissions Error:', error);
    res.status(500).json({ error: 'Failed to fetch all submissions' });
  }
};

export const updateSubmissionStatus = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { status, reviewNote } = req.body;
  const user = (req as any).user;

  if (!hasPermission(user, 'submissions:review:*')) {
    const submission = await prisma.submission.findUnique({
      where: { id },
      select: { formId: true },
    });
    if (!submission || !hasPermission(user, `submissions:review:${submission.formId}`)) {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
    }
  }


  if (!Object.values(SubmissionStatus).includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const submission = await prisma.submission.update({
      where: { id },
      data: { 
        status,
        reviewNote
      },
      include: {
        form: true
      }
    });

    // Create Notification for the user
    await prisma.notification.create({
      data: {
        userId: submission.userId,
        title: `Submission ${status === 'APPROVED' ? 'Approved' : 'Rejected'}`,
        message: `Your ${submission.form.title} application has been ${status.toLowerCase()}.${reviewNote ? ` Note: ${reviewNote}` : ''}`,
        type: status === 'APPROVED' ? 'SUCCESS' : 'ERROR',
        link: `/portal/submission/${submission.id}`
      }
    });

    res.json(submission);
  } catch (error) {
    console.error('Update Submission Error:', error);
    res.status(500).json({ error: 'Failed to update submission' });
  }
};

export const getSubmissionById = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = (req as any).user;

  try {
    const submission = await prisma.submission.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            username: true,
            xboxId: true,
            role: true,
            profile: { select: { profilePicture: true } },
          }
        },
        form: {
          select: {
            title: true,
            icon: true,
            color: true,
          }
        }
      },
    });

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    // Permission check: Admin or the owner
    if (!hasPermission(user, 'submissions:view') && submission.userId !== user.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    res.json(submission);
  } catch (error) {
    console.error('Fetch Submission By ID Error:', error);
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const user = (req as any).user;

  if (!hasPermission(user, 'users:manage')) {
    return res.status(403).json({ error: 'Forbidden: Admin access only' });
  }

  try {
    const users = await prisma.user.findMany({
      include: {
        profile: {
          select: {
            displayName: true,
            profilePicture: true,
          }
        },
        userRoles: {
          include: {
            role: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(users);
  } catch (error) {
    console.error('Fetch All Users Error:', error);
    res.status(500).json({ error: 'Failed to fetch all users' });
  }
};

export const getSubmissionStats = async (req: Request, res: Response) => {
  const user = (req as any).user;

  if (!hasPermission(user, 'submissions:view')) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const totalSubmissions = await prisma.submission.count();
    const approvedSubmissions = await prisma.submission.count({ where: { status: 'APPROVED' } });
    const pendingSubmissions = await prisma.submission.count({ where: { status: 'PENDING' } });
    const totalUsers = await prisma.user.count();

    res.json({
      totalSubmissions,
      approvedSubmissions,
      pendingSubmissions,
      totalUsers
    });
  } catch (error) {
    console.error('Fetch Stats Error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
