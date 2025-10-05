import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const data = await fetchAllCategories
      } catch (error) {}
    };
  });

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Categories</h1>

        <NavLink
          to="add"
          className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          + Add Categories
        </NavLink>
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-white/10 text-gray-700 p-4">
          <tr>
            <th className="px-4 py-2">Category Name</th>
            <th className="px-4 py-2">Slug Name</th>
            <th className="px-4 py-2">Created at</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Mobile</td>
            <td className="px-4 py-2">mobile</td>
            <td className="px-4 py-2">2025-10-01</td>
            <td className="px-4 py-2">
              <NavLink className="mr-1 bg-yellow-500 px-2 py-1 cursor-pointer">
                Edit
              </NavLink>
              <button className="ml-1 bg-red-500 px-2 py-1 text-white cursor-pointer">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
