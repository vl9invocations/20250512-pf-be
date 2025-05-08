import express from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';
import orderStatusFilter from '../middleware/orderStatusFilter.js';

const orderRoutes = express.Router();

// GET
orderRoutes.get('/', getAllOrders);
orderRoutes.get('/:id', getOrder);

// POST
orderRoutes.post('/', orderStatusFilter, createOrder);

// PUT
orderRoutes.put('/:id', orderStatusFilter, updateOrder);

// DELETE
orderRoutes.delete('/:id', deleteOrder);


export default orderRoutes;