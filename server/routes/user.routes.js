import express from "express";
import { getUsers } from "../controllers/userController/getAllUsers.controller.js";

const router = express.Router();

// Get All Users
router.get("/all", getUsers);

export default router;
