import errorService from '../services/errorService';

export default function orderStatusFilter(req, res, next) {
    const { status } = req.body;

    const statusRegex = /^(pending|shipped|delivered)$/;

    if (!statusRegex.test(status)) {
        return errorService(res, 400, new Error('Invalid or absent order status'));
    } else {
        next();
    }
};