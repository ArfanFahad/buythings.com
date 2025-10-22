import prisma from "../../db/client.js";

// Updating category in database
export const updateCategoryModel = async (id, updateCategoryData) => {
  try {
    // check if category exist
    const existCategory = await prisma.category.findUnique({
      where: { id },
    });
    if (!existCategory) {
      console.log("Category not found with id: ", id);
      return null;
    }

    // update category
    const updateCategory = await prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryData.categoryName,
        slug: updateCategoryData.categorySlug,
      },
    });

    console.log("Category updated: ", updateCategory);
    return updateCategory;
  } catch (error) {
    console.error("Error updating category: ", error.message);
    throw error;
  }
};
