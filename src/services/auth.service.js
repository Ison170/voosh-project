import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import { jwtSecret } from '../constants/common.constant.js';

export const register = async (username, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, password: hashedPassword, email });
};

export const login = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user || !await bcrypt.compare(password, user.password)) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, jwtSecret, { expiresIn: '1h' });
    return { token, user };
};


