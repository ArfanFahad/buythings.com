import { createProduct } from "../../product/product.create.js";

export const productCreation = async (req, res) => {
  try {
    const { name, description } = req.body;
    const price = parseFloat(req.body.price);
    const stock = parseInt(req.body.stock);
    // generating image URL
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !description || !price || !stock || !imageUrl) {
      return res.status(400).json({ error: "All Fields are required" });
    }

    try {
      const newProduct = await createProduct(
        name,
        description,
        price,
        stock,
        imageUrl
      );

      return res.status(200).json({ product: newProduct });
    } catch (error) {
      console.error("Error creating products: ", error.message);
      return res.status(500).json({ error: "Database Error" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server Error", details: error.message });
  }
};
