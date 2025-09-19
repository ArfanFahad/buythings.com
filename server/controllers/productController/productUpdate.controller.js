import { updatedProduct } from "../../product/product.update.js";

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const price = req.body.price ? parseFloat(req.body.price) : undefined;
  const stock = req.body.stock ? parseInt(req.body.stock) : undefined;
  // const { name, description, price, stock } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  // Printing Image Information in Backend
  console.log("Image File Info: ", imageUrl);

  // Creating object
  const updatedProductData = {
    id,
    name,
    description,
    price,
    stock,
    imageUrl,
  };

  try {
    const update = await updatedProduct(id, updatedProductData);
    res.status(200).json({
      updatedProduct: update,
      message: "Product Successfully Updated",
      filename: req.file?.filename,
      fileUrl: req.file
        ? `http://localhost:3000/uploads/${imageUrl.filename}`
        : null,
    });
  } catch (error) {
    console.error("Error updating product: ", error.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};
