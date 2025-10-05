import axios from "axios";

const API_BASE_EDIT = "http://localhost:3000/v1/products/update";

export const updateProduct = async (id, formData) => {
  try {
    const response = await axios.put(`${API_BASE_EDIT}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update product"
    );
  }
};
