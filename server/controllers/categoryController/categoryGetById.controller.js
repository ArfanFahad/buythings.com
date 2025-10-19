import { gettingCategoryById } from "../../model/category/getCategoryById.model.js";

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const getData = await gettingCategoryById(id);

    if (!getData) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.json({ getData });
  } catch (error) {
    console.error("Error fetching category by ID: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
