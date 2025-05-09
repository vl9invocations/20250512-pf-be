import express from 'express';
import participantsRoutes from './participantsRoutes';

const router = express.Router();

router.use('/api/v1/participants', participantsRoutes);

export default router;