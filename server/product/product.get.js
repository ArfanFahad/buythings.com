import prisma from "../db/client.js";

// Getting all products
export const getAllProductsData = async () => {
  try {
    const data = await prisma.product.findMany();
    return data;
  } catch (error) {
    console.error("Error fetching products: ", error.message);
    throw error;
  }
};
