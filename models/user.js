import mongoose from "mongoose";

const {Schema}=mongoose;

const user=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:8
    }
},{timestamps:true});

const RegisterUser=mongoose.model("user",user);
export default RegisterUser;