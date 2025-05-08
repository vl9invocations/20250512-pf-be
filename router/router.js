import express from 'express';
import orderRoutes from './orderRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/orders', orderRoutes);
router.use('/users', userRoutes);


export default router;