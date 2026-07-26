import { Router } from 'express';
import { authenticate } from '../../../../middlewares/auth.middleware';
import { 
  getAdminPosts, 
  deletePost, 
  updatePostStatus 
} from './community.admin.controller';
import {
  getPosts,
  getPostById,
  createPost
} from './community.controller';
import {
  createComment,
  deleteComment,
  toggleReaction
} from './community.interaction.controller';

const router = Router();

// Admin routes (Put specific routes first)
router.get('/admin', authenticate, getAdminPosts);
router.delete('/admin/:id', authenticate, deletePost);

// Interaction routes
router.post('/reactions', authenticate, toggleReaction);
router.post('/:uuid/comments', authenticate, createComment);
router.delete('/:uuid/comments/:commentId', authenticate, deleteComment);
router.delete('/:id', authenticate, deletePost);
router.put('/:id', authenticate, updatePostStatus);

// Public routes
router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', authenticate, createPost);

export default router;
