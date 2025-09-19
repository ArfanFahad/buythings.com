import { gettingProductById } from "../../product/product.getById.js";

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const getData = await gettingProductById(id);

    if (!getData) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ getData });
  } catch (error) {
    console.error("Error fetching product by ID: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
