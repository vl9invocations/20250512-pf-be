import express from 'express';
import { addParticipant, deleteParticipant, getAllParticipants, updateParticipant } from '../controllers/participantController';

const participantRoutes = express.Router();

// * GET ALL
participantRoutes.get('/', getAllParticipants);
// participantRoutes.get('/:id', getOrder);

// * POST
participantRoutes.post('/', addParticipant);

// * PUT
participantRoutes.put('/:id', updateParticipant);

// * DELETE
participantRoutes.delete('/:id', deleteParticipant);


export default participantRoutes;