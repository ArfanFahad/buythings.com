import express from "express";
import { productCreation } from "../controllers/productCreation.controller.js";
import { getAllProducts } from "../controllers/productGet.controller.js";
import { fileConfiguration } from "../utils/fileConfig.js";
import { productDelete } from "../controllers/productDelete.controller.js";
import multer from "multer";

const router = express.Router();

router.use("/uploads", express.static(fileConfiguration.uploadFolderRoute));

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileConfiguration.uploadFolderRoute);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

// Product Creation
router.post("/create", upload.single("imageFile"), productCreation);

// Getting Product
router.get("/allProducts", getAllProducts);

// Deleting Product
router.delete("/remove/:id", productDelete);

export default router;
