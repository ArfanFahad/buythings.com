import { removeUser } from "../../user/delete.js";

export const userDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await removeUser(id);
    res.status(200).json({ message: "User Deleted", user: deleteUser });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
