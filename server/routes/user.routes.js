import express from "express";
import { getUsersController } from "../controllers/userController/getAllUsers.controller.js";
import { userDeleteController } from "../controllers/userController/userDeletion.controller.js";

const router = express.Router();

// Get All Users
router.get("/all", getUsersController);

// Delete Single User
router.delete("/:id", userDeleteController);

export default router;
