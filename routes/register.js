import express from "express";
import {register,login,getAllUser} from "../controller/auth.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/allUser",getAllUser)

export default router;