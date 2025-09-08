import prisma from "../db/client.js";

// Updating Product
export const updatedProduct = async (id, updatedProductData) => {
  try {
    // Getting Current Product From DB
    const existing = await prisma.product.findUnique({
      where: { id },
    });
    if (!existing) throw Error("Product not found");

    // Shallow copy of the object
    let useableData = { ...existing };
    delete useableData.categoryId;
    delete useableData.createdAt;
    delete useableData.updatedAt;

    // Working with Edited Data
    let editedData = updatedProductData;
    const updatedDataKeys = Object.keys(editedData);

    /* filterData is an object where we will keep
       data after comparing
    */ let filteredData = {};

    // Loop to find out mismated data
    for (let i = 0; i < updatedDataKeys.length; i++) {
      const key = updatedDataKeys[i];

      if (editedData[key] !== useableData[key]) {
        if (key === "imageUrl" && editedData.imageUrl === null) {
          continue;
        } else {
          filteredData[key] = editedData[key];
        }
      }
    }

    console.log("Filtered Data: ", filteredData);

    // Handling Edge Case
    if (Object.keys(filteredData).length === 0) {
      console.log("No changes found, skipping update");
      return existing;
    }

    try {
      const data = await prisma.product.update({
        where: { id: existing.id },
        data: filteredData,
      });
      console.log("Data got updated: ", data);
      return data;
    } catch (error) {
      console.error("Error updating product: ", error.message);
      throw error;
    }
  } catch (error) {
    console.error("Error updating product: ", error.message);
    throw error;
  }
};
