import dotenv from "dotenv";
dotenv.config();

export const portNo=process.env.EXPRESS_PORT_NO;
export const jwtSecret= process.env.JWT_SECRET;
export const tokenBlacklist = new Set();


