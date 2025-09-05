import prisma from "../db/client.js";

// Get A Single Product By ID
export const gettingProductById = async (id) => {
  try {
    const data = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching products: ", error.message);
    throw Error;
  }
};
