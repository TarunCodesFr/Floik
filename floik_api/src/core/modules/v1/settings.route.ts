import { Router } from 'express';
import { getSettings, updateSettings } from './portal/settings.controller';
import { authenticate } from '../../../middlewares/auth.middleware';
import { hasPermission } from '../../../utils/permissions';

const router = Router();

router.get('/', getSettings);

const updateMiddleware = [
    authenticate,
    (req: any, res: any, next: any) => {
        if (hasPermission(req.user, 'settings:manage')) {
            return next();
        }
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    },
    updateSettings
];

router.patch('/', ...updateMiddleware);
router.put('/', ...updateMiddleware);

export default router;
