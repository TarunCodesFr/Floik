import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { 
  getActiveForms, 
  getAllForms, 
  createForm, 
  updateForm, 
  deleteForm,
  getFormById
} from './form.controller';

const router = Router();

// Mounted at /api/v1/forms
router.get('/active', getActiveForms); // Used by portal users
router.get('/:id', getFormById); // Get single form
router.get('/', authenticate, getAllForms); // Admin only
router.post('/', authenticate, createForm);
router.put('/:id', authenticate, updateForm);
router.delete('/:id', authenticate, deleteForm);

export default router;
