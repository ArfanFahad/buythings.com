import { getAllUsers } from "../../user/get.js";

export const getUsers = async (req, res) => {
  try {
    const usersInfo = await getAllUsers();

    return res.status(200).json(usersInfo);
  } catch (error) {
    return res.status(500).json({ "Error Getting User Data": error.message });
  }
};
