import axios from "axios";

const API_BASE_URL = "http://localhost:3000/v1/product/create";

export const createProduct = async (productData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}`, productData);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Product Creation Failed");
  }
};
