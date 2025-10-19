import prisma from "../../db/client.js";

// Get a single product by Id
export const gettingCategoryById = async (id) => {
  try {
    const data = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
    throw Error;
  }
};
