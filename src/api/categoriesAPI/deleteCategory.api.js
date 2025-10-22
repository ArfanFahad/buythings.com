import axios from "axios";

const API_CATEGORY_DELETE = "http://localhost:3000/v1/categories/remove";

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_CATEGORY_DELETE}/${id}`);
    console.log("Deleted Category Id: ", id);
    return response.data;
  } catch (error) {
    console.error("Failed to delete category: ", error.message);
    throw new Error();
  }
};
