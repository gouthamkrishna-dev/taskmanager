import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import task from "./routes/task.js";
import auth from "./routes/register.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use("/auth",auth);
app.use("/",task);
const port =process.env.PORT||8080;
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected successfully");
    }catch(err) {
        console.log({err:err.message});
    }
    
}

app.listen(port,()=>{
    connect();
    console.log(`the server from port ${port} successfully connected`);
})



