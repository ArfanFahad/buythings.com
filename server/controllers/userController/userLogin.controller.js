import prisma from "../../db/client.js";
import { generateToken } from "../../utils/jwtService.js";
import { getUserByEmail } from "../../services/userService.js";
import { comparePassword } from "../../utils/hash.js";

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. finding user by email
    const existingUser = await getUserByEmail(email);

    // 2. if user is not found
    if (!existingUser) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // 3. comparing password
    const isMatch = await comparePassword(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 4. generate jwt token - pending
    // const token = generateToken(existingUser.id);

    // 5. sending back response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
      },
    });
  } catch (error) {
    console.error(error.message);
    return res
      .status(401)
      .json({ message: "Login Failed", error: error.message });
  }
};
