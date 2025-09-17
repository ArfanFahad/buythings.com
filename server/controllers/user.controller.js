import { getAllUsers } from "../user/get.js";
import { createUser } from "../user/create.js";

export const getUsers = async (req, res) => {
  try {
    const usersInfo = await getAllUsers();

    return res.status(200).json(usersInfo);
  } catch (error) {
    return res.status(500).json({ "Error Getting User Data": error.message });
  }
};

export const userCreation = async (req, res) => {
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
