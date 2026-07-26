import { Router } from 'express';
import auth from './auth/auth.route';
import portal from './portal/portal.route';
import announcements from './announcements/announcement.route';
import notifications from './notifications/notification.route';
import settings from './settings.route';
import forms from './forms/form.route';
import community from './community/community.route';

import { getPublicProfile } from './auth/auth.controller';

const router = Router();

router.use('/auth', auth);
router.get('/profile/:username', getPublicProfile);
router.use('/portal', portal);
router.use('/announcements', announcements);
router.use('/notifications', notifications);
router.use('/forms', forms);
router.use('/settings', settings);
router.use('/community', community);

export default router;
