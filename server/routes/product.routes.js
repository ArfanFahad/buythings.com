import express from "express";
import { productCreation } from "../controllers/productController/productCreation.controller.js";
import { getAllProducts } from "../controllers/productController/productGetAll.controller.js";
import { updateProduct } from "../controllers/productController/productUpdate.controller.js";
import { productDelete } from "../controllers/productController/productDelete.controller.js";
import { getProductById } from "../controllers/productController/productGetById.controller.js";
import { upload } from "../utils/multerConfig.js";

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
