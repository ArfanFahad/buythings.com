import { createProduct } from "../../api/productsAPI/createProduct.api.js";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/productsAPI/getProductById.api.js";
import { useEffect, useState } from "react";
import { updateProduct } from "../../api/productsAPI/updateProduct.api.js";
import { fetchCategoriesAPI } from "../../api/categoriesAPI/getCategories.api.js";

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  const { id } = useParams();
  const isEditMode = Boolean(id);

  // Featch All Categories that are already created
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchCategoriesAPI();
        // console.log("Fetched Categories: ", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (isEditMode) {
      fetchProductById(id)
        .then((data) => {
          setProduct(data);
          setImageUrl(`http://localhost:3000${data.getData.imageUrl}`);
        })
        .catch((err) => {
          console.error("Failed to fetch product: ", err.message);
        });
    }
  }, [id, isEditMode]);

  // Condition rendering, fix the problem of prefilling select category
  if (isEditMode && (!product || categories.length === 0)) {
    return <p className="text-slate-200">Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // e.target will grabs everything with "name" attribute

    const updateFileInput = e.target.imageFile;
    const newFile = updateFileInput.files[0];
    console.log("Information of update Image: ", newFile);

    try {
      let result;

      if (isEditMode) {
        // Product Edit Mode
        if (newFile) {
          result = await updateProduct(id, formData);
          console.log("Product Updated Successfull with Image: ", result);
        } else {
          result = await updateProduct(id, formData);
          console.log("Product Updated Successfully: ", result);
        }
      } else {
        // Product Create Mode
        result = await createProduct(formData);
        console.log("Product Created Successfully: ", result);
      }

      e.target.reset();
    } catch (error) {
      console.error("Failed to create product: ", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">
        {isEditMode ? "Edit Product" : "Add New Product"}
      </h1>

      <form encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Product Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name"
            defaultValue={product?.getData?.name}
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <div className="mt-3">
          <label
            htmlFor="description"
            className="block mb-2 font-semibold drop-shadow-2xl"
          >
            Description:{" "}
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            defaultValue={product?.getData?.description}
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          ></textarea>
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block mb-2 font-semibold drop-shadow-2xl"
          >
            Categories
          </label>

          <select
            id="category"
            name="categoryId"
            defaultValue={product?.getData?.categoryId || ""}
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10 "
            required
          >
            <option value="" className="bg-indigo-950">
              -- Select Category --
            </option>
            {categories.map((cat, index) => (
              <option
                key={cat.id || index}
                value={cat.id}
                className="bg-indigo-950"
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price:{" "}
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            defaultValue={product?.getData?.price}
            className="w-full border border-black rounded  px-3 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="stock" className="block font-medium">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
            defaultValue={product?.getData?.stock}
            className="w-full border border-black rounded  mt-2 px-2 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="imageFile" className="block mt-2 font-medium mb-2">
            Image:
          </label>
          {product?.getData?.imageUrl && (
            <div className="mb-2">
              <p>Current Image: </p>
              <img
                src={imageUrl}
                alt="Current Product"
                className="w-32 h-32 object-cover border"
              />
            </div>
          )}
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            className="w-full border border-black rounded py-2 px-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <button
          type="submit"
          className="inline-block mt-5 mb-4 px-4 py-2 bg-blue-500 text-white rounded  hover:bg-blue-600 cursor-pointer duration-300"
        >
          {id ? "Update Product" : "Submit"}
        </button>
      </form>
    </div>
  );
}
