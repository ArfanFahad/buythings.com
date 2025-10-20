import prisma from "../../db/client.js";

// Updating category in database
export const updateCategoryModel = async (id, updateCategoryData) => {
  try {
    // If any current product match this?
    const exist = await prisma.category.findUnique({
      where: { id },
    });
    if (!exist) {
      console.log("Id not found");
      return res.status(404).json({ message: "Category not found" });
    }

    // shallow copy of the retured object from db
    console.log("Data from DB: ", exist);
    console.log("Data fron Frontend: ", updateCategoryData);
  } catch (error) {}
};
