
import errorService from '../services/errorService';
import { Request, Response, NextFunction } from 'express';

export default function receivedFormValidation(req: Request, res: Response, next: NextFunction) {
    const { name, email, birthdate } = req.body;

    const nameRegex = /^[a-zA-Z\s]+$/;
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!name || !nameRegex.test(name) || name.length > 50 || name.length < 5) {
        return errorService(res, 400, new Error('Invalid or absent name'));
    }

    if (!email || !emailRegex.test(email) || email.length > 50) {
        return errorService(res, 400, new Error('Invalid or absent email'));
    }

    if (!birthdate || !birthdateRegex.test(birthdate)) {
        return errorService(res, 400, new Error('Invalid or absent birthdate'));
    }

    next();
}