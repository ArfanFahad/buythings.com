import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { fileConfiguration } from "./utils/fileConfig.js";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import userRoute from "./routes/user.routes.js";
import categoryRouter from "./routes/categories.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// router mounting
app.use("/uploads", express.static(fileConfiguration.uploadFolderRoute));

// Users Info
app.use("/v1/users", userRoute);

// All Authentication Routes
app.use("/v1/auth", authRouter);

// All Product Routes
app.use("/v1/product", productRouter);

// All Category Routes
app.use("/v1/categories", categoryRouter);

// Server Initialization
const PORT = config.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
