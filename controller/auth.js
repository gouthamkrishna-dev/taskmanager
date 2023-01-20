import RegisterUser from "../models/user.js";
import UserTasks from "../models/userTask.js";
import bcrypt from "bcrypt";
export const register=async(req,res)=>{
    const {email,password}=req.body;
try {
    const salt=await bcrypt.genSalt();
    const hashPassword=await bcrypt.hash(password,salt);
    const user=new RegisterUser({
        email,
        password:hashPassword
    });
    await user.save();
    res.status(200).json({msg:"User successfully created"});
}catch(err) {
 res.status(503).json({msg:err.message});
}
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
    const registerEmail=await RegisterUser.findOne({email:email});
    if(!registerEmail) {
     return res.status(401).json({msg:"not found"});
    }
    const hashPassword=await bcrypt.compare(password,registerEmail.password);
    if(!hashPassword) return res.status(403).json({msg:"invalid credentials"});
    const tasks=await UserTasks.findOne({userid:registerEmail._id});
    if(!tasks) {
        res.status(200).json("[]");
    }
    res.status(200).json(tasks);
    }catch(err) {
        res.status(503).json({msg:err.message});
    }
}

export const getAllUser=async(req,res)=>{
    try {
     const allUser=await RegisterUser.find();
    res.status(200).json(allUser);
    }catch(err) {
        res.status(503).json({msg:err.message});
    }
}