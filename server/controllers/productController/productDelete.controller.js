import { removeProduct } from "../../product/product.delete.js";

export const productDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await removeProduct(id);

    res.status(200).json({
      message: `Product${id} deleted successfully`,
      deleteProduct,
    });
  } catch (error) {
    console.error("Error deleting product: ", error.message);
    res.status(500).json({ error: "Delete failed" });
  }
};
