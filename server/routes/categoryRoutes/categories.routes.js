import express from "express";
import { categoryCreationController } from "../../controllers/categoryController/categoryCreation.controller.js";
import { getCategoryController } from "../../controllers/categoryController/getCategory.controller.js";

const router = express.Router();

// Getting Category
router.get("/", getCategoryController);

// Category Creation Route
router.post("/create", categoryCreationController);

export default router;
