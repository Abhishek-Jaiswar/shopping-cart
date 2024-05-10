import React from "react";
import Ratings from "../Components/Ratings";
import { CartState } from "./Context/Context";

const SingleProducts = ({ product }) => {
  const customStyle = {
    fontSize: ".9rem",
  };

  const { state, dispatch } = CartState();
  const { cart } = state;

  const isInCart = cart.some((p) => p.id === product.id);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product.id,
    });
  };

  return (
    <div>
      <div className="bg-gray-50 min-h-[10rem] p-3 rounded-md shadow-lg">
        <div className="rounded-md">
          <img className="w-[15rem] rounded-md" src={product.image} alt="" />
        </div>
        <div className="py-2 pb-0">
          <h1 className="text-gray-800 font-semibold">
            {product.name.slice(0, 23)}
          </h1>
        </div>
        <div className="pb-3">
          <p className="text-gray-600 font-semibold">
            {product.description.slice(0, 25)}
          </p>
        </div>
        <div className="flex items-center justify-between px-1 gap-4 pb-3">
          <p className="text-[1.2rem] text-gray-900 font-semibold">
            ₹{product.price}
          </p>
          <Ratings rating={product.rating} style={customStyle} />
        </div>
        <div>
          {isInCart ? (
            <button
              onClick={removeFromCart}
              className="px-5 py-1.5 bg-blue-100 text-gray-900 font-semibold rounded-md cursor-pointer hover:bg-blue-200"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="px-5 py-1.5 bg-blue-100 text-gray-900 font-semibold rounded-md cursor-pointer hover:bg-blue-200"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
