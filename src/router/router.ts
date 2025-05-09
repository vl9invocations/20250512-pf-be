import express from 'express';
import participantsRoutes from './participantsRoutes';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/api/v1/participants', participantsRoutes);
router.use('/api/v1/users', userRoutes);

export default router;