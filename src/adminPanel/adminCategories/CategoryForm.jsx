import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryById } from "../../api/categoriesAPI/getCategoryById.api.js";
import { createCategoryAPI } from "../../api/categoriesAPI/createCategory.api.js";
import { updateCategory } from "../../api/categoriesAPI/updateCategory.api.js";

export default function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  const { id } = useParams();
  const isEditMode = Boolean(id);

  // Fetch category details for edit mode
  useEffect(() => {
    if (isEditMode) {
      fetchCategoryById(id)
        .then((data) => {
          setCategoryName(data.getData.name);
          setCategorySlug(data.getData.slug);
        })
        .catch((err) => {
          console.error("Failed to fetch categories: ", err.message);
        });
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = { categoryName, categorySlug };

    // API Call
    try {
      if (isEditMode) {
        const res = await updateCategory(id, category);
        console.log("Category Updated: ", res);
      } else {
        const res = await createCategoryAPI(category);
        console.log("Category Created: ", res);
      }

      // Reset after save
      setCategoryName("");
      setCategorySlug("");
    } catch (error) {
      console.error("Error saving category: ", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">
        {isEditMode ? "Edit Category" : "Add Category"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryname" className="block mb-2 font-medium">
            Category Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="slug"
            className="block mb-2 font-semibold drop-shadow-2xl"
          >
            Slug:{" "}
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            placeholder="Enter slug name"
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <button
          type="submit"
          className="inline-block mt-5 px-4 py-2 bg-indigo-500 text-white rounded  hover:bg-blue-600 cursor-pointer duration-300"
        >
          {id ? "Update Category" : "Submit"}
        </button>
      </form>
    </div>
  );
}
