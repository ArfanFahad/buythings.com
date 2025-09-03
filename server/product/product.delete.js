import prisma from "../db/client.js";

// removing Product
export const removeProduct = async (id) => {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  });
};
