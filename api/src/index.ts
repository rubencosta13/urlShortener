import app from './app';
import mongoose from 'mongoose';


const startApi = async () => {
    console.log("Starting APP");
    try { 
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
        app.listen(3000, () => {
            console.log("URL shortner started");
        });
    }catch(error) {
        console.error(error);
    }
};


startApi();