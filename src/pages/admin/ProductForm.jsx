import { createProduct } from "../../api/createProduct.api.js";

export default function AddProduct() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // e.target will grabs everything with "name" attribute

    const fileInput = formData.get("imageFile");
    if (!fileInput || fileInput.size === 0) {
      alert("Please select the product image");
      return;
    }

    try {
      const result = await createProduct(formData);
      console.log("Product Created Successfully: ", result);
      e.target.reset();
    } catch (error) {
      console.error("Failed to create product: ", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">Add New Product</h1>

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
            className="w-full border border-black rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          ></textarea>
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
            className="w-full border border-black rounded  mt-2 px-2 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="imageFile" className="block mt-2 font-medium mb-2">
            Image:
          </label>
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
          Submit
        </button>
      </form>
    </div>
  );
}
