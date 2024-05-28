
import express from "express";
import cors from "cors"
import { portNo } from "./constants/common.constant.js";
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import sequelize from "./config/database.config.js";


const app=express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

sequelize.sync().then(()=>{
    app.listen(portNo,()=>{
        console.log("the app is running on port",portNo)
    })
})

