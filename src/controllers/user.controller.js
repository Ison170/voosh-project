import { updateUser, getUserById, getAllPublicUsers, getAllUsers } from '../services/user.service.js';

export const updateUserDetails = async (req, res) => {
    const updates = req.body;
    const userId = req.user.id;
    try {
        await updateUser(userId, updates);
        const updatedUser = await getUserById(userId);
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

export const uploadPhoto = async (req, res) => {
    const photo = req.file.buffer.toString('base64');
    try {
        await updateUser(req.user.id, { photo });
        const updatedUser = await getUserById(req.user.id);
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

export const getUserProfiles = async (req, res) => {
    try {
        const users = req.user.isAdmin ? await getAllUsers() : await getAllPublicUsers();
        res.send(users);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


