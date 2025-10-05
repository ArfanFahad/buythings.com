import prisma from "../../db/client.js";

// getting all categories
export const getCategoryModel = async () => {
  try {
    const data = await prisma.category.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching categories: ", error.message);
    throw error;
  }
};
