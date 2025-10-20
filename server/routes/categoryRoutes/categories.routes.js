import express from "express";
import { categoryCreationController } from "../../controllers/categoryController/categoryCreation.controller.js";
import { getCategoryController } from "../../controllers/categoryController/getCategory.controller.js";
import { getCategoryById } from "../../controllers/categoryController/categoryGetById.controller.js";
import { updateCategoryController } from "../../controllers/categoryController/updateCategory.controller.js";

const router = express.Router();

// Getting Category
router.get("/", getCategoryController);

// Category Creation Route
router.post("/create", categoryCreationController);

// Get Single Product by ID to Edit
router.get("/:id", getCategoryById);

// Edit Product
router.put("/update/:id", updateCategoryController);

export default router;
