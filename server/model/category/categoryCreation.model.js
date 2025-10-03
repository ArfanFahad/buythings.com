import prisma from "../../db/client.js";

export const createCategoryModel = async (categoryName, categorySlug) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: categoryName,
        slug: categorySlug,
      },
    });
    return category;
  } catch (error) {
    console.error("Error creating category: ", error);
    throw new Error("Failed to create category");
  }
};
