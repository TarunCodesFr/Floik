import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { requirePermission } from '../../../../middlewares/permission.middleware';
import { 
  submitPortalForm, 
  getMySubmissions, 
  getAllSubmissions, 
  getSubmissionById, 
  getAllUsers, 
  updateSubmissionStatus,
  getSubmissionStats
} from './portal.controller';
import {
  getAllRoles,
  createRole,
  updateRole,
  deleteRole,
  reorderRoles,
  updateUserRoles
} from './roles.controller';

const router = Router();

// These will be mounted at /api/v1/portal
router.post('/submit', authenticate, submitPortalForm);
router.get('/submissions', authenticate, getMySubmissions);
router.get('/submissions/all', authenticate, getAllSubmissions);
router.get('/submissions/:id', authenticate, getSubmissionById);
router.patch('/submissions/:id/status', authenticate, updateSubmissionStatus);
router.get('/stats', authenticate, getSubmissionStats);

router.get('/users', authenticate, getAllUsers);
router.put('/users/:userId/roles', authenticate, updateUserRoles);

// Roles management
router.get('/roles', authenticate, getAllRoles);
router.post('/roles', authenticate, createRole);
router.put('/roles/reorder', authenticate, reorderRoles);
router.put('/roles/:id', authenticate, updateRole);
router.delete('/roles/:id', authenticate, deleteRole);

export default router;
