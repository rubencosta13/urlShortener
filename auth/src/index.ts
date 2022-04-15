import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
    if (!process.env.JWT_KEY){
        throw new Error("[Error] JWT Key is not defined");
    }
    try {
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
        console.log("[Database] Connected successfully");
    }catch (error) {
        console.log(error);
    }

    app.listen(3000, () => {
        console.log('[Api] Started successfully');
    })
}

start();
