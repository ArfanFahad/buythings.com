import axios from "axios";

const API_BASE_URL = "http://localhost:3000/v1/categories";

export const fetchCategoryById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch category", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to get category by Id"
    );
  }
};
