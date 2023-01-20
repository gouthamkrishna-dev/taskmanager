import mongoose from "mongoose";

const {Schema}=mongoose;

const task=new Schema({
    addTask:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
},{timestamps:true});

const UserTasks=mongoose.model("Task",task);
export default UserTasks;