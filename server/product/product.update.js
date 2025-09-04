import prisma from "../db/client.js";

// Updating product
export const updatedProduct = async (id) => {
  try {
    const data = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return console.log("Data got updated: ", data);
  } catch (error) {
    console.error("Error updating product: ", error.message);
    throw error;
  }
};
