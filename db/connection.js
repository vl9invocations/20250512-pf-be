import e from "express";
import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                dbName: process.env.MONGO_DB_NAME
            }
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};

export default connection;