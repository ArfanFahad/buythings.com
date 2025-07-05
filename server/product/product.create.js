import prisma from "../db/client.js";

export const createProduct = async (
  name,
  description,
  price,
  stock,
  imageUrl
) => {
  return await prisma.product.create({
    data: { name, description, price, stock, imageUrl },
  });
};
