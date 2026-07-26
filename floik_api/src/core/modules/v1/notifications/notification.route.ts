import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { 
  getMyNotifications, 
  markAsRead, 
  createNotification, 
  deleteNotification 
} from './notification.controller';

const router = Router();

// Mounted at /api/v1/notifications
router.get('/', authenticate, getMyNotifications);
router.post('/', authenticate, createNotification);
router.patch('/:id/read', authenticate, markAsRead);
router.delete('/:id', authenticate, deleteNotification);

export default router;
