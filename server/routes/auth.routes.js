import express from "express";
import { userRegistration } from "../controllers/userController/userCreation.controller.js";
import { userLogin } from "../controllers/userController/userLogin.controller.js";

const router = express.Router();

// User Registration
router.post("/register", userRegistration);

// User Login
router.post("/login", userLogin);

export default router;
