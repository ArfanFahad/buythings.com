import { useState } from "react";
import { createCategoryAPI } from "../../api/createCategory.api.js";

export default function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = {
      categoryName,
      categorySlug,
    };

    console.log("Category Name: ", categoryName);
    console.log("Category Slug: ", categorySlug);

    // API Call
    try {
      const res = await createCategoryAPI(category);
      console.log("Category Created: ", res);
    } catch (error) {
      console.error(error.message);
    }

    // These field will be empty after click
    setCategoryName("");
    setCategorySlug("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">Add Category</h1>

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
          Submit
        </button>
      </form>
    </div>
  );
}
