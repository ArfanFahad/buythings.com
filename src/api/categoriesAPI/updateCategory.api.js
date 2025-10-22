import axios from "axios";

const API_BASE_UPDATE = "http://localhost:3000/v1/categories/update";

export const updateCategory = async (id, category) => {
  try {
    const response = await axios.put(`${API_BASE_UPDATE}/${id}`, category);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update category"
    );
  }
};
