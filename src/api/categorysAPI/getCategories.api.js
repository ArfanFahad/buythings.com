import axios from "axios";

const API_GET_CATEGORIES = "http://localhost:3000/v1/categories";

export const fetchCategoriesAPI = async () => {
  try {
    const response = await axios.get(API_GET_CATEGORIES);
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get all categories"
    );
  }
};
