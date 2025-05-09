// import User from "../models/User.js";
import responseService from "../services/responseService.ts";
import errorService from "../services/errorService.ts";

// GET all Users
export async function getAllUsers(req, res) {
    try {
        const users = await User.find().select({ __v: 0 });
        responseService(res, 200, users);
    } catch {
        errorService(res, 500, new Error('Can\'t get users'));
    }
};

// GET User
export async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id).select({ __v: 0 });
        if (!user) {
            errorService(res, 404, new Error('User not found'));
        }
        responseService(res, 200, user);
    } catch {
        errorService(res, 400, new Error('Can\'t get user. Check the request.'));
    }
};

// POST User
export async function createUser(req, res) {
    const { name, email, age = null } = req.body;
    try {
        const user = new User({
            name,
            email,
            age
        });

        await user.save();
        const savedUser = await User.findById(user._id).select({ __v: 0 });
        responseService(res, 201, savedUser);

    } catch {
        errorService(res, 400, new Error('Check the request body. Email should be unique.'));
    }
};

// PUT User
export async function updateUser(req, res) {
    try {
        const user = await User.findById(req.params.id).select({ __v: 0 });
        if (!user) {
            return errorService(res, 404, new Error('User not found'));
        } else {
            for (let key in req.body) {
                user[key] = req.body[key];
            }
        }
        await user.save();
        responseService(res, 200, user);
    } catch {
        errorService(res, 500, new Error('Can\'t update user'));
    }
};

// DELETE User
export async function deleteUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return errorService(res, 404, new Error('User not found'));
        } else {
            await User.findByIdAndDelete(req.params.id);
        }
        responseService(res, 200, 'User deleted');
    } catch {
        errorService(res, 500, new Error('Can\'t delete user'));
    }
};