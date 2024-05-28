import jwt from 'jsonwebtoken';
import { jwtSecret ,tokenBlacklist} from '../constants/common.constant.js';
import User from '../models/User.model.js';

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token || tokenBlacklist.has(token)) {
        return res.status(401).send({ error: 'Authentication required' });
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findByPk(decoded.userId);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authentication required' });
    }
};

const authorizeAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).send({ error: 'Admin access required' });
    }
    next();
};

export { authenticate, authorizeAdmin };
