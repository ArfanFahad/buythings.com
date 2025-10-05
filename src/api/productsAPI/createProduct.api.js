import axios from "axios";

const API_BASE_URL = "http://localhost:3000/v1/products/create";

export const createProduct = async (formData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response in Frontend: ", res.data);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Product Creation Failed");
  }
};
