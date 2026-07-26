import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { 
  getAnnouncements, 
  createAnnouncement, 
  updateAnnouncement, 
  deleteAnnouncement 
} from './announcement.controller';

const router = Router();

// Mounted at /api/v1/announcements
router.get('/', getAnnouncements);
router.post('/', authenticate, createAnnouncement);
router.patch('/:id', authenticate, updateAnnouncement);
router.delete('/:id', authenticate, deleteAnnouncement);

export default router;
