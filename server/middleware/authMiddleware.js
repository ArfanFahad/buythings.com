import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const protectedAdmin = (req, res, next) => {
  const authHeader = req.headers;
  console.log(authHeader);

  // const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return res.status(401).json({ message: "Not authorized, token missing" });
  // }

  // // Extracting From Header
  // const token = authHeader.split(" ")[1];
  // console.log("Token from frontend: ", token);
  // console.log(token);
};
