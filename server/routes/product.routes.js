import express from "express";
import { productCreation } from "../controllers/product.controller.js";
const router = express.Router();

// Product Creation
router.post("/create", productCreation);

export default router;
