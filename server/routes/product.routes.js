import express from "express";
import { productCreation } from "../controllers/productCreation.controller.js";
import { getAllProducts } from "../controllers/productGet.controller.js";
import { updateProduct } from "../controllers/productUpdate.controller.js";
import { productDelete } from "../controllers/productDelete.controller.js";
import { upload } from "../utils/multerConfig.js";
import { getProductById } from "../controllers/productGetById.controller.js";

const router = express.Router();

// Product Creation
router.post("/create", upload.single("imageFile"), productCreation);

// Getting Product
router.get("/allProducts", getAllProducts);

// Get Single Product by ID for Editing Purpose
router.get("/:id", getProductById);

// Edit Product
router.put("/update/:id", upload.single("imageFile"), updateProduct);

// Deleting Product
router.delete("/remove/:id", productDelete);

export default router;
