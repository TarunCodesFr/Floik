import { Request, Response } from 'express';
import { prisma } from '../../../../packages/prisma';
import { hasPermission } from '../../../../utils/permissions';

export const createForm = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'forms:create')) return res.status(403).json({ error: 'Forbidden' });

  const { title, description, isActive, icon, color, fields } = req.body;

  try {
    const form = await prisma.form.create({
      data: {
        title,
        description,
        isActive: isActive ?? true,
        icon,
        color,
        fields: fields || []
      }
    });
    res.status(201).json(form);
  } catch (error) {
    console.error('Create Form Error:', error);
    res.status(500).json({ error: 'Failed to create form' });
  }
};

export const updateForm = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'forms:edit')) return res.status(403).json({ error: 'Forbidden' });

  const id = req.params.id as string;
  const { title, description, isActive, icon, color, fields } = req.body;

  try {
    const form = await prisma.form.update({
      where: { id },
      data: {
        title,
        description,
        isActive,
        icon,
        color,
        fields
      }
    });
    res.json(form);
  } catch (error) {
    console.error('Update Form Error:', error);
    res.status(500).json({ error: 'Failed to update form' });
  }
};

export const deleteForm = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'forms:delete')) return res.status(403).json({ error: 'Forbidden' });

  const id = req.params.id as string;

  try {
    await prisma.form.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Delete Form Error:', error);
    res.status(500).json({ error: 'Failed to delete form' });
  }
};

export const getActiveForms = async (req: Request, res: Response) => {
  try {
    const forms = await prisma.form.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' }
    });
    res.json(forms);
  } catch (error) {
    console.error('Get Active Forms Error:', error);
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
};

export const getFormById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const form = await prisma.form.findUnique({ where: { id } });
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json(form);
  } catch (error) {
    console.error('Get Form By ID Error:', error);
    res.status(500).json({ error: 'Failed to fetch form' });
  }
};

export const getAllForms = async (req: Request, res: Response) => {
  const user = (req as any).user;
  if (!hasPermission(user, 'forms:view')) return res.status(403).json({ error: 'Forbidden' });

  try {
    const forms = await prisma.form.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(forms);
  } catch (error) {
    console.error('Get All Forms Error:', error);
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
};
