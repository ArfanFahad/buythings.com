import { updatedProduct } from "../product/product.update.js";

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;

  // file handling
  const imageFile = req.file;
  let imageUrl;
  if (imageFile) {
    imageUrl = `/uploads/${imageFile.filename}`;
  }

  const allData = {
    id: id,
    name: name,
    description: description,
    price: price,
    stock: stock,
    imageUrl: imageFile,
  };

  try {
    const update = await updatedProduct(id);
    res.status(200).json({ message: "Product Successfully Updated", allData });
  } catch (error) {
    console.error("Error updating product: ", error.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};
