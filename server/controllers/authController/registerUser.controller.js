import { createUser } from "../../user/create.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await createUser(name, email, password);

    return res.status(200).json({ newUser });
  } catch (error) {
    return res.status(500).json({ "Server Error": error.message });
  }
};
