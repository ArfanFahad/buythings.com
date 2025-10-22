import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategoriesAPI } from "../../api/categoriesAPI/getCategories.api.js";
import { formatDateTime } from "../../utils/dateTimeFormatter.js";

export default function CategoriesPage() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchCategoriesAPI();
        setCategory(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-slate-200 text-xl font-light">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-400 text-xl font-light">Error: {error}</p>;
  }

  return (
    <div className="text-slate-100">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-slate-50">Categories</h1>
        <NavLink
          to="add"
          className="px-4 py-2 bg-slate-500 hover:bg-slate-400 text-white rounded-lg transition-all"
        >
          + Add Category
        </NavLink>
      </div>

      {/* Table container */}
      <div className="overflow-hidden rounded-xl border border-slate-600 shadow-md">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-slate-700 text-slate-200 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-medium">Category Name</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Created At</th>
              <th className="px-4 py-3 font-medium">Updated At</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {category.map((myCategories) => (
              <tr
                key={myCategories.id}
                className="hover:bg-slate-600/60 transition-colors"
              >
                <td className="px-4 py-3">{myCategories.name}</td>
                <td className="px-4 py-3 text-slate-300">
                  {myCategories.slug}
                </td>
                <td className="px-4 py-3 text-slate-400">
                  {formatDateTime(myCategories.createdAt)}
                </td>
                <td className="px-4 py-3 text-slate-400">
                  {formatDateTime(myCategories.updatedAt)}
                </td>
                <td className="px-4 py-3 text-center">
                  <NavLink
                    to={`edit/${myCategories.id}`}
                    className="inline-block px-3 py-1.5 mr-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium rounded-md transition-all"
                  >
                    Edit
                  </NavLink>
                  <NavLink className="inline-block px-3 py-1.5 bg-red-500 hover:bg-red-400 text-white font-medium rounded-md transition-all">
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
