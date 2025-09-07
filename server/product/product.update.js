import prisma from "../db/client.js";

// Updating Product
export const updatedProduct = async (id, updatedProductData) => {
  try {
    // Getting Current Product From DB
    const existing = await prisma.product.findUnique({
      where: { id },
    });
    if (!existing) throw Error("Product not found");

    /* Ommited Data is Basically the data that
      we don't need in here so, we are gonna
      separate those data and keep them in
      omitData object.
      omitted field are:
      categoryId,
      createdAt,
      updatedAt
    */ let omitData = {};

    /* Useable data is the data that we
       are compare with the db data with
       edited data.
     */ let useableData = {};

    // Sanitizing Existed Data From DB for comparing
    if (existing) {
      omitData.categoryId = existing.categoryId;
      omitData.createdAt = existing.createdAt;
      omitData.updatedAt = existing.updatedAt;
      useableData.id = existing.id;
      useableData.name = existing.name;
      useableData.description = existing.description;
      useableData.price = existing.price;
      useableData.stock = existing.stock;
      useableData.imageUrl = existing.imageUrl;
    }

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
          // omitData.imageUrl = editedData.imageUrl;
          // filteredData.name = editedData.name;
          // filteredData.description = editedData.description;
          // filteredData.price = editedData.price;
          // filteredData.stock = editedData.stock;
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

  /* 
  // Old Version Code 
  try {
    const data = await prisma.product.update({
      where: { id: id },
      data: updatedProductData,
    });
    console.log("Data got updated: ", data);
    return data;
  } catch (error) {
    console.error("Error updating product: ", error.message);
    throw error;
  }

  */
};
