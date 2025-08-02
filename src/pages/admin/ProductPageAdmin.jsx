import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchAllProducts } from "../../api/getProduct.api.js";

export default function ProductPageAdmin() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      <NavLink
        to="add"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        + Add Product
      </NavLink>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-white/10 text-gray-700">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Image URL</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((myProduct) => (
            <tr key={myProduct.id}>
              <td className="px-4 py-2">{myProduct.name}</td>
              <td className="px-4 py-2">{myProduct.description}</td>
              <td className="px-4 py-2">{myProduct.price}</td>
              <td className="px-4 py-2">{myProduct.stock}</td>
              <td className="px-4 py-2">{myProduct.imageUrl}</td>
              <td className="px-4 py-2">{myProduct.category}</td>
              <td className="px-4 py-2">
                <button className="mr-1 bg-yellow-500 px-2 py-1 cursor-pointer">
                  Edit
                </button>
                <button className="ml-1 bg-red-500 px-2 py-1 text-white cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
