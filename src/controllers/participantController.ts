import { Request, Response, NextFunction } from 'express';
import responseService from "../services/responseService";
import errorService from "../services/errorService.js";
import query from "../db/connection";

interface Participant {
    id: number;
    name: string;
    email: string;
}

export async function getAllParticipants(req: Request, res: Response) {

    const sql = 'SELECT * FROM finale.participants ORDER BY id ASC;';

    await query(sql, [])
        .then((result) => {
            const participants = result.rows;
            if (result.rowCount === 0) {
                return responseService(res, 204, 'No participants found');
            }

            return responseService(res, 200, participants);
        })
        .catch((error) => {
            console.error('Error executing query', error);
            errorService(res, 500, new Error('Can\'t get participants'));
        });
}


// Add participant
export async function addParticipant(req: Request, res: Response) {
    const { name, email, birthdate } = req.body;

    // if (!name || !email || !birthdate) {
    //     return errorService(res, 400, new Error('Missing required fields: name, email, or birthdate'));
    // }

    const sql = 'INSERT INTO finale.participants (name, email, birthdate) VALUES ($1, $2, $3) RETURNING *;';
    const values = [name, email, birthdate];

    await query(sql, values)
        .then((result) => {
            const participant = result.rows[0];
            return responseService(res, 201, participant);
        })
        .catch((error) => {
            console.error('Error executing query', error);
            errorService(res, 500, new Error('Can\'t add participant'));
        });
}

// Update participant
export async function updateParticipant(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, birthdate } = req.body;

    const fields = [];
    const values = [];
    let index = 1;

    if (name) {
        fields.push(`name = $${index++}`);
        values.push(name);
    }
    if (email) {
        fields.push(`email = $${index++}`);
        values.push(email);
    }
    if (birthdate) {
        fields.push(`birthdate = $${index++}`);
        values.push(birthdate);
    }

    if (fields.length === 0) {
        return errorService(res, 400, new Error('No fields to update'));
    }

    const sql = `UPDATE finale.participants SET ${fields.join(', ')} WHERE id = $${index} RETURNING *;`;
    values.push(id);

    await query(sql, values)
        .then((result) => {
            if (result.rowCount === 0) {
                return errorService(res, 404, new Error('Participant not found'));
            }
            const participant = result.rows[0];
            return responseService(res, 200, participant);
        })
        .catch((error) => {
            console.error('Error executing query', error);
            errorService(res, 500, new Error('Can\'t update participant'));
        });
}

// Dekete participants based on id
export async function deleteParticipant(req: Request, res: Response) {
    const { id } = req.params;

    const sql = 'DELETE FROM finale.participants WHERE id = $1 RETURNING *;';
    const values = [id];

    await query(sql, values)
        .then((result) => {
            if (result.rowCount === 0) {
                return errorService(res, 404, new Error('Participant not found'));
            }
            return responseService(res, 200, 'Participant deleted');
        })
        .catch((error) => {
            console.error('Error executing query', error);
            errorService(res, 500, new Error('Can\'t delete participant'));
        });
}