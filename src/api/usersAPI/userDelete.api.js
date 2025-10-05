import axios from "axios";

const API_USER_DELETE = "http://localhost:3000/v1/users";

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_USER_DELETE}/${id}`);
    console.log(`ID: ${id} is delete`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete user: ", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to delete product"
    );
  }
};
