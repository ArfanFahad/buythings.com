import prisma from "../db/client.js";

export const createProduct = async (
  name,
  description,
  categoryId,
  price,
  stock,
  imageUrl
) => {
  try {
    const productData = await prisma.product.create({
      data: { name, description, categoryId, price, stock, imageUrl },
    });
    return productData;
  } catch (error) {
    console.error("Failed creating product: ", error.message);
  }
};
