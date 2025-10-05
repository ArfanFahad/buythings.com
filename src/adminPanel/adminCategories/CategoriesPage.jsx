import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategoriesAPI } from "../../api/categorysAPI/getCategories.api.js";

export default function CategoriesPage() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchCategoriesAPI();
        setCategory(response.data); // response.data -> here, data is the obj sending backend
        // API TIMING
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching users data: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-white font-light text-2xl">Loading. . . </p>;
  }

  if (error) {
    return <p className="text-red-500 font-light text-3xl">Error: {error}</p>;
  }

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
          {category.map((myCategories) => {
            return (
              <tr key={myCategories.id}>
                <td className="px-4 py-2">{myCategories.name}</td>
                <td>{myCategories.slug}</td>
                <td>{new Date(myCategories.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <NavLink className="mr-1 bg-yellow-500 px-2 py-1 cursor-pointer">
                    Edit
                  </NavLink>
                  <button className="ml-1 bg-red-500 px-2 py-1 text-white cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
