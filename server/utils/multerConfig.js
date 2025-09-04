import multer from "multer";
import { fileConfiguration } from "./fileConfig.js";

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

export const upload = multer({ storage: storage });
