import prisma from "../db/client.js";

// Updating product
export const updateProduct = async () => {
  try {
    const data = await prisma.product.findUnique({
      where: {
        id: "53d976f7-85dc-4371-a19e-98095c6eba88",
      },
    });
    return console.log(data);
  } catch (error) {
    console.error("Error updating product: ", error.message);
    throw error;
  }
};

updateProduct();
