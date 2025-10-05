import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {};

export default function CartPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between m-10 text-3xl font-serif">
          <div>Your Cart</div>
          <div className="underline underline-offset-8">
            <a href="">Continue Shopping</a>
          </div>
        </div>

        <div className="flex justify-between ml-10 mr-10 text-2xl">
          <div>Product</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        <hr className="ml-8 mr-8 mt-2" />
        <div>
          <ul className="flex justify-between ml-10 mr-10 mt-5 text-xl">
            <li>Product Picture</li>
            <li className="flex justify-center items-center">
              <button className="border pl-2 pr-4 cursor-pointer">
                <span className="text-4xl">-</span>
              </button>
              <button className="border pl-2 pr-4">
                <span className="text-4xl">1</span>
              </button>
              <button className="border pl-2 pr-4 cursor-pointer">
                <span className="text-4xl">+</span>
              </button>
            </li>
            <li>TK 5000</li>
          </ul>
        </div>
        <hr className="mt-10" />
        <div className="flex justify-end mt-12 mr-8 text-2xl gap-10">
          <div>Total: </div>
          <div>10000 TK </div>
        </div>
      </div>
    </>
  );
}
