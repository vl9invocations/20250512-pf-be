import express from 'express';
import getAllParticipants from '../controllers/participantController';
// import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.ts';
// import orderStatusFilter from '../middleware/orderStatusFilter.ts';

const participantRoutes = express.Router();



// * GET ALL
participantRoutes.get('/', getAllParticipants);
// participantRoutes.get('/:id', getOrder);

// * POST
// participantRoutes.post('/', orderStatusFilter, createOrder);

// * PUT
// participantRoutes.put('/:id', orderStatusFilter, updateOrder);

// * DELETE
// participantRoutes.delete('/:id', deleteOrder);


export default participantRoutes;