import express from 'express';
import { addParticipant, deleteParticipant, getAllParticipants, updateParticipant } from '../controllers/participantController';
import receivedFormValidation from '../middleware/reveivedFormValidation';

const participantRoutes = express.Router();

// * GET ALL
participantRoutes.get('/', getAllParticipants);
// participantRoutes.get('/:id', getOrder);

// * POST
participantRoutes.post('/', receivedFormValidation, addParticipant);

// * PUT
participantRoutes.put('/:id', receivedFormValidation, updateParticipant);

// * DELETE
participantRoutes.delete('/:id', deleteParticipant);


export default participantRoutes;