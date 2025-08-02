import { getAllProductsData } from "../product/product.get.js";

export const getAllProducts = async (req, res) => {
  try {
    const data = await getAllProductsData();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
