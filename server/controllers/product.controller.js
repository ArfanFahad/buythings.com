import { createProduct } from "../product/product.create.js";

export const productCreation = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl } = req.body;

    if (!name || !description || !price || !stock || !imageUrl) {
      return res.status(400).json({ error: "All Fields are required" });
    }

    const newProduct = await createProduct(
      name,
      description,
      price,
      stock,
      imageUrl
    );

    return res.status(200).json({ newProduct });
  } catch (error) {
    return res.status(500).json({ "Server Error": error.message });
  }
};
