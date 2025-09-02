import axios from "axios";

const API_PRODUCT_DELETE = "http://localhost:3000/v1/product/remove";

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_PRODUCT_DELETE}/${id}`);
    console.log("Frontend Sending 'id' that will be deleted");
    return response.data;
  } catch (error) {
    console.error("Failed to delete product: ", error);
    throw new Error(
      error.response?.data?.message || "Failed to delete product"
    );
  }
};
