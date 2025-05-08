import express from 'express';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import emailFilter from '../middleware/emailFilter.js';

const userRotues = express.Router();

// GET
userRotues.get('/', getAllUsers);
userRotues.get('/:id', getUser);

// POST
userRotues.post('/', emailFilter, createUser);

// PUT
userRotues.put('/:id', emailFilter, updateUser);

// DELETE
userRotues.delete('/:id', deleteUser);


export default userRotues;