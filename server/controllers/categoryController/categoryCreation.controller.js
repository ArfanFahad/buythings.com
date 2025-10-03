import { createCategoryModel } from "../../model/category/categoryCreation.model.js";

export const categoryCreationController = async (req, res) => {
  try {
    const { categoryName, categorySlug } = req.body;

    // Input validation
    if (!categoryName || !categorySlug) {
      return res.status(400).json({
        success: false,
        message: "Both categoryName and categorySlug are required",
      });
    }

    // Calling model
    const newCategory = await createCategoryModel(categoryName, categorySlug);

    // response
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      date: newCategory,
    });
  } catch (error) {
    console.error("Error creating category: ", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
