import User from '../models/User.model.js';

export const updateUser = async (userId, updateData) => {
    return User.update(updateData, { where: { id: userId } });
}; 

export const getUserById = async (userId) => {
    return User.findByPk(userId);
};

export const getAllPublicUsers = async () => {
    return User.findAll({ where: { isPublic: true } });
};

export const getAllUsers = async () => {
    return User.findAll();
};


