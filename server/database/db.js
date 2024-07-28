 import mongoose from "mongoose";
 import dotenv from 'dotenv';

 dotenv.config();

 const DBConnection = async () => {

     const MONGODB_URL = process.env.MONGODB_URL;
     console.log("DB connection established");
     try {
         await mongoose.connect(MONGODB_URL);

     } catch (error) {
         console.log('Error while connecting to database ', error);
     }
 };

 export default DBConnection;

