import axios from "axios";

const API_CREATE_CATEGORY_URL = "http://localhost:3000/v1/categories/create";

export const createCategoryAPI = async (categoryData) => {
  try {
    const res = await axios.post(`${API_CREATE_CATEGORY_URL}`, categoryData);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Category Creation Failed"
    );
  }
};
