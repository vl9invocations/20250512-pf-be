// import Order from "../models/Order";
import responseService from "../services/responseService";
import errorService from "../services/errorService.js";
import { response } from "express";

interface Participant {
    id: number;
    name: string;
    email: string;
}

export default function getAllParticipants(req, res) {

    const participants: Participant[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'test@email.test',
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: ''
        },
        {
            id: 3,
            name: 'John Smith',
            email: ''
        },
    ]

    if (participants && participants.length > 0) {
        return responseService(res, 200, participants);
    } else {
        return errorService(res, 400, new Error('No participants found'));
    }
}

// GET all Orders
// export async function getAllOrders(req, res) {
//     try {
//         const orders =
//             await Order.find()
//                 .select({ __v: 0 })
//                 .populate('userId', { __v: 0 });
//         responseService(res, 200, orders);
//     } catch {
//         errorService(res, 500, new Error('Can\'t get orders'));
//     }
// };

// // GET Order
// export async function getOrder(req, res) {
//     try {
//         const order = await Order.findById(req.params.id).select({ __v: 0 }).populate('userId', { __v: 0 });
//         responseService(res, 200, order);
//     } catch {
//         errorService(res, 400, new Error('Order not found'));
//     }
// };

// // POST Order
// export async function createOrder(req, res) {
//     const { userId, product, quantity, status = 'pending' } = req.body;
//     try {
//         const order = new Order({
//             userId,
//             product,
//             quantity,
//             status
//         });

//         await order.save();
//         const savedOrder = await Order.findById(order._id).select({ __v: 0 });
//         responseService(res, 201, savedOrder);
//     } catch (e) {
//         console.log(e)
//         errorService(res, 400, new Error('Check the request body.'));
//     }
// };

// // PUT Order
// export async function updateOrder(req, res) {
//     try {
//         const order = await Order.findById(req.params.id).select({ __v: 0 });
//         if (!order) {
//             errorService(res, 404, new Error('Order not found'));
//         } else {
//             for (let key in req.body) {
//                 order[key] = req.body[key];
//             }
//         }
//         await order.save();

//         responseService(res, 200, order);
//     } catch {
//         errorService(res, 500, new Error('Can\'t update order'));
//     }
// };

// // DELETE Order
// export async function deleteOrder(req, res) {
//     try {
//         const order = await Order.findById(req.params.id);
//         if (!order) {
//             return errorService(res, 404, new Error('Order not found'));
//         } else {
//             await Order.findByIdAndDelete(req.params.id);
//         }
//         responseService(res, 200, 'Order deleted');
//     } catch {
//         errorService(res, 500, new Error('Can\'t delete order'))
//     }
// };