import { updateCategoryModel } from "../../model/category/updateCategory.model.js";

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { categoryName, categorySlug } = req.body;

  // Creating Object
  const updatedCategory = {
    id,
    categoryName,
    categorySlug,
  };

  try {
    const update = await updateCategoryModel(id, updatedCategory);
    return update;
  } catch (error) {
    console.error("Error updating category: ", error.message);
  }
};
