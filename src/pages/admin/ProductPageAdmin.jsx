import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchAllProducts } from "../../api/getProduct.api.js";
import { deleteProduct } from "../../api/deleteProduct.api.js";

export default function ProductPageAdmin() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProduct(data);
        // API Timing Simulation
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await deleteProduct(id);
      setProduct(product.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Delete Failed: ", error.message);
    }
  };

  if (loading) {
    return <p className="text-white font-light text-2xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 font-light text-3xl">Error: {error}</p>;
  }

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
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((myProduct) => (
            <tr key={myProduct.id} className="hover:bg-white/10">
              <td className="px-4 py-2">{myProduct.name}</td>
              <td className="px-4 py-2">{myProduct.description}</td>
              <td className="px-4 py-2">{myProduct.price}</td>
              <td className="px-4 py-2">{myProduct.stock}</td>
              <td className="px-4 py-2">{myProduct.imageUrl}</td>

              <td className="px-4 py-2">
                <NavLink
                  className="mr-1 bg-yellow-500 px-2 py-1 cursor-pointer"
                  to={`edit/${myProduct.id}`}
                >
                  Edit
                </NavLink>
                <button
                  className="ml-1 bg-red-500 px-2 py-1 text-white cursor-pointer"
                  onClick={() => handleDelete(myProduct.id)}
                >
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
