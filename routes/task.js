import express from "express";
const router=express.Router();
import {getAllTasks,addTask,updateTask,deleteTask} from "../controller/task.js"
router.get("/wholetasks",getAllTasks);
router.post("/addtask/:userid",addTask)
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);

export default router;