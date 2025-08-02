import { createProduct } from "../../api/createProduct.api.js";

export default function AddProduct() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-6">Add New Product</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const product = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: parseFloat(formData.get("price")),
            stock: parseInt(formData.get("stock")),
            imageUrl: formData.get("imageUrl"),
          };

          try {
            const result = await createProduct(product);
            console.log("Product created successfully: ", result);
            e.target.reset();
          } catch (error) {
            console.error("Failed to create product: ", error.message);
          }
        }}
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="block mb-2 font-semibold drop-shadow-2xl"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-0 focus:bg-white/10"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter product price"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-0 bg-white/10"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="stock" className="block mb-2 font-medium">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="Enter available stock"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-0 bg-white/10"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="block mb-2 font-medium">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-0 bg-white/10"
          />
        </div>

        <button
          type="submit"
          className="inline-block mt-5 mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
