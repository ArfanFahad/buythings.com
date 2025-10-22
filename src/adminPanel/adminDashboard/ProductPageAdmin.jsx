import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchAllProducts } from "../../api/productsAPI/getProduct.api.js";
import { deleteProduct } from "../../api/productsAPI/deleteProduct.api.js";

export default function ProductPageAdmin() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProduct(data);
        setTimeout(() => setLoading(false), 200);
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
    return <p className="text-slate-200 text-xl font-light">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-400 text-xl font-light">Error: {error}</p>;
  }

  return (
    <div className="text-slate-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-slate-50">Products</h1>
        <NavLink
          to="add"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md font-medium transition-all"
        >
          + Add Product
        </NavLink>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-600 shadow-md">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-slate-700 text-slate-200 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Image URL</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {product.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-600/60 transition-colors"
              >
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3 text-slate-300">
                  {item.description || "-"}
                </td>
                <td className="px-4 py-3">{item.category?.name || "N/A"}</td>
                <td className="px-4 py-3 text-slate-200">{item.price}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3 text-slate-400 truncate max-w-[160px]">
                  {item.imageUrl}
                </td>
                <td className="px-4 py-3 text-center">
                  <NavLink
                    to={`edit/${item.id}`}
                    className="inline-block px-3 py-1.5 mr-2 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-md transition-all"
                  >
                    Edit
                  </NavLink>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-block px-3 py-1.5 bg-red-500 hover:bg-red-400 text-white font-medium rounded-md transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
