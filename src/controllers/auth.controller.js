import { tokenBlacklist } from '../constants/common.constant.js';
import { register, login } from '../services/auth.service.js';

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await register(username, password, email);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { token, user } = await login(username, password);
        res.send({ token, user });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const logoutUser = (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token) {
        tokenBlacklist.add(token); 
    }
    res.send({ message: 'Logged out successfully' });
};

export { registerUser, loginUser ,logoutUser};
