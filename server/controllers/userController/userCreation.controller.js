import { createUser } from "../../user/create.js";

export const userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        Error: "All Field Required",
      });
    }

    await createUser(name, email, password);

    return res.status(200).json({ "Data Sent to Database": req.body });
  } catch (error) {
    console.error(error.message);
  }
};
