import errorService from "../services/errorService.js";

export default function userEmailFilter(req, res, next) {
    const { email } = req.body;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        return errorService(res, 400, new Error('Invalid email'));
    } else {
        next();
    }
}