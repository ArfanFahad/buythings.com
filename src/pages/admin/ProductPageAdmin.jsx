import { NavLink } from "react-router-dom";

export default function ProductPageAdmin() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      <NavLink
        to="add"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        + Add Product
      </NavLink>

      <div>
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-white/20 backdrop-blur-md">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Category</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-white/15 transition">
              <td className="p-3">1</td>
              <td className="p-3">Sample Product</td>
              <td className="p-3">$ 25</td>
              <td className="p-3">120</td>
              <td className="p-3">Electronics</td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-yellow-500 rounded cursor-pointer">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 rounded cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
