import express from "express";
import { categoryCreationController } from "../../controllers/categoryController/categoryCreation.controller.js";

const router = express.Router();

// User Creation Route
router.post("/create", categoryCreationController);

export default router;
