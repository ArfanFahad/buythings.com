import express from "express";
import { productCreation } from "../controllers/productCreation.controller.js";
import { getAllProducts } from "../controllers/productGet.controller.js";
const router = express.Router();

// Product Creation
router.post("/create", productCreation);

// Getting Product
router.get("/allProducts", getAllProducts);

export default router;
