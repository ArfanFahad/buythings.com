import { deleteCategoryModel } from "../../model/category/deleteCategory.model.js";

export const categoryDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteCategoryModel(id);

    if (!result.success) {
      return res.status(404).json({ error: result.message });
    }

    return res.status(200).json({ message: result.message });
  } catch (error) {
    console.error("Error deleting category: ", error.message);
    res.status(500).json({ error: "Category Delete Failed." });
  }
};
