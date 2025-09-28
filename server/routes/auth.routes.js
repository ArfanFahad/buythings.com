import express from "express";
import { userSignUp } from "../controllers/userController/userCreation.controller.js";
import { userLogin } from "../controllers/userController/userLogin.controller.js";

const router = express.Router();

// User Registration
router.post("/register", userSignUp);

// User Login
router.post("/login", userLogin);

export default router;
