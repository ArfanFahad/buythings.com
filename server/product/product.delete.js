import prisma from "../db/client";

// removing Product
export const removeProduct = async () => {
  try {
    const data = await prisma.product.delete({
      where: {
        id: "someting",
      },
    });
    return console.log("Product Successfully Deleted");
  } catch (error) {
    console.error("Error Deleting Product: ", error.message);
    throw error;
  }
};
