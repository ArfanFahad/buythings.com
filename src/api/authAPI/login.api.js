import axios from "axios";

const API_BASE_LOGIN = "http://localhost:3000/v1/auth/login";

export const userLogin = async (loginData) => {
  try {
    const response = await axios.post(API_BASE_LOGIN, loginData);
    return response.data; // Here, data is a property of Axios
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};
