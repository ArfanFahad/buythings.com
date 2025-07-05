import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// All Authentication Routes
app.use("/api/auth", authRouter);

// All Product Routes
app.use("/api/product", productRouter);

// Server Initialization
const PORT = config.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
