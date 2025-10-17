import prisma from "../db/client.js";

// removing Product
export const removeProduct = async (id) => {
  try {
    const deleteProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    return deleteProduct;
  } catch (error) {
    console.log("Product Delete Failed: ", error.message);
  }
};
