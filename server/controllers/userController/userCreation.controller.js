import { createUser } from "../../user/create.js";
import { getUserByEmail } from "../../services/userService.js";
import { hashPassword } from "../../utils/hash.js";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        Error: "All fields are required",
      });
    }

    // checking if email is already exist
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Password Hashing
    const hashPass = await hashPassword(password);

    // create user
    const user = await createUser(name, email, hashPass);

    return res.status(201).json({
      message: "Account created successfully",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Signup error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};
