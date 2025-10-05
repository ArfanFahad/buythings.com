import axios from "axios";

const API_BASE_URL = "http://localhost:3000/v1/products";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products: ", error);
    throw new Error(error.response?.data?.message || "Failed to load products");
  }
};
