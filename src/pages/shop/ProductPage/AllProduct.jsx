import { useState, useEffect } from "react";
import { fetchAllProducts } from "../../../api/productsAPI/getProduct.api.js";
import { useNavigate } from "react-router-dom";

export default function AllProduct() {
  const navigate = useNavigate();

  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // Save cart to localstorage when it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Cart saved to localStorage: ", cart);
    }
  }, [cart]);

  // Loading Existing cart from localstorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
        console.log("Loaded Cart: ", JSON.parse(savedCart));
      } else {
        console.log("No saved cart found in localStorage.");
      }
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
    }
  }, []);

  const handleAddToCart = (product) => {
    navigate("/cart");
    setCart([...cart, product]);
    console.log("Cart Now: ", [...cart, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10 mb-10">
      <header className="mb-4">
        <h1 className="text-3xl font-semibold">All Products</h1>
      </header>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <ul className="grid lg:grid-cols-4 gap-4">
          {products.map((product) => {
            return (
              <li key={product.id}>
                {product.imageUrl && (
                  <img
                    src={`http://localhost:3000${product.imageUrl}`}
                    className="w-72 h-48 object-cover rounded mb-4"
                  />
                )}
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-3">
                  <p className="font-bold text-blue-600">
                    Price: {product.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Stock: {product.stock}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-800 duration-300 cursor-pointer">
                    Buy Now
                  </button>
                  <button
                    className="mt-4 bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-800 duration-300 cursor-pointer"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
