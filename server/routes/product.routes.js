import express from "express";
import { productCreation } from "../controllers/productCreation.controller.js";
import { getAllProducts } from "../controllers/productGet.controller.js";
import { fileConfiguration } from "../utils/fileConfig.js";
import { updateProduct } from "../controllers/productUpdate.controller.js";
import { productDelete } from "../controllers/productDelete.controller.js";
import { upload } from "../utils/multerConfig.js";

const router = express.Router();

router.use("/uploads", express.static(fileConfiguration.uploadFolderRoute));

// Product Creation
router.post("/create", upload.single("imageFile"), productCreation);

// Getting Product
router.get("/allProducts", getAllProducts);

// Edit Product
router.put("/update/:id", upload.single("imageFile"), updateProduct);

// Deleting Product
router.delete("/remove/:id", productDelete);

export default router;
