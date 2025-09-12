import express from "express";
import { getUsers, userCreation } from "../controllers/user.controller.js";

const router = express.Router();

// Get All Users
router.get("/all", getUsers);

// Creating User
router.post("/signup", userCreation);

export default router;
