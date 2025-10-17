import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  // 🟩 Step 1: Load cart from localStorage when page loads
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 🟩 Step 2: Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-5">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div
              key={index}
              className="border-b py-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                {product.imageUrl && (
                  <img
                    src={`http://localhost:3000${product.imageUrl}`}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <p className="text-gray-600">TK {product.price}</p>
                </div>
              </div>
              <p className="font-semibold">1 item</p>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-semibold">
            Total: TK {totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}

// import { useState, useEffect } from "react";

// export default function CartPage() {
//   const [cart, setCart] = useState([]);

//   // Load cart from LocalStorage when page loads
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Calculate total price
//   const totalPrice = cart.reduce((sum, item) => {
//     return sum + item.price, 0;
//   });

//   return (
//     <>
//       <div className="flex flex-col">
//         <div className="flex justify-between m-10 text-3xl font-serif">
//           <div>Your Cart</div>
//           <div className="underline underline-offset-8">
//             <a href="">Continue Shopping</a>
//           </div>
//         </div>

//         <div className="flex justify-between ml-10 mr-10 text-2xl">
//           <div>Product</div>
//           <div>Quantity</div>
//           <div>Sub Total</div>
//         </div>
//         <hr className="ml-8 mr-8 mt-2" />
//         <div>
//           <ul className="flex justify-between ml-10 mr-10 mt-5 text-xl">
//             <li>Product Picture</li>
//             <li className="flex justify-center items-center">
//               <button className="border pl-2 pr-4 cursor-pointer">
//                 <span className="text-4xl">-</span>
//               </button>
//               <button className="border pl-2 pr-4">
//                 <span className="text-4xl">1</span>
//               </button>
//               <button className="border pl-2 pr-4 cursor-pointer">
//                 <span className="text-4xl">+</span>
//               </button>
//             </li>
//             <li>TK 5000</li>
//           </ul>
//         </div>
//         <hr className="mt-10" />
//         <div className="flex justify-end mt-12 mr-8 text-2xl gap-10">
//           <div>Total: </div>
//           <div>10000 TK </div>
//         </div>
//       </div>
//     </>
//   );
// }
