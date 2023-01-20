
import UserTasks from "../models/userTask.js"

export const getAllTasks=async(req,res)=>{
 try {
    const getAllTasks=await UserTasks.find();
    res.status(200).json(getAllTasks);
 }catch(err) {
   res.status(503).json({msg:err.message});
 }
}


export const addTask=async(req,res)=>{
   const {addTask}=req.body;
   const {userid}=req.params;
   const newTask=new UserTasks({
    addTask,
    userid
});
 try {
    await newTask.save();
    res.status(201).json(newTask);
    }catch(err) {
    res.status(503).json({msg:err.message});
    }
}

export const updateTask=async(req,res)=>{
    const {id}=req.params;
    const {addTask}=req.body;
    try {
      await UserTasks.findByIdAndUpdate(id,
        {addTask}
      )
      res.status(200).json({msg:"successfully updated"});
    }catch(err) {
        res.status(503).json({msg:err.message});
    }
}

export const deleteTask=async(req,res)=>{
    const {id}=req.params;
    try {
     await UserTasks.findByIdAndDelete(id);
     res.status(200).json({msg:"successfully deleted"});
    }catch(err) {
        res.status(503).json({msg:err.message});
    }
}