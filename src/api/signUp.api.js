import axios from "axios";

const API_BASE_SIGNUP = "http://localhost:3000/v1/auth/register";

export const userSignUp = async (signUpData) => {
  try {
    const response = await axios.post(API_BASE_SIGNUP, signUpData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};
