import axios from "axios";

const API_BASE_GET_ALL_USERS = "http://localhost:3000/v1/users/all";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_BASE_GET_ALL_USERS);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get all users info"
    );
  }
};
