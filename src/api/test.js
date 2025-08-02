// test.js or cli.js
import { getAllProductsData } from "../../server/product/product.get.js";

const main = async () => {
  try {
    const products = await getAllProductsData();
    console.log("Products:", products);
  } catch (err) {
    console.error("Failed to fetch products:", err.message);
  }
};

main();
