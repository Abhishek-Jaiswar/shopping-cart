import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import ReactImg from "../assets/react.svg";
import { FaTrashAlt } from "react-icons/fa";
import { CartState } from "./Context/Context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartDropDownRef = useRef(null);
  const dropdownRef = useRef(null);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const toggleUserIcon = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartIcon = () => {
    setCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    if (
      cartDropDownRef.current &&
      !cartDropDownRef.current.contains(event.target)
    ) {
      setCartOpen(false);
    }

    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    if (isCartOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, isCartOpen]);

  const handleDeleteCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="flex items-center justify-between gap-40 border-b-2 pb-2">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl text-gray-600 font-bold">Indux Mart</h1>
      </div>
      <div className="flex-1">
        <input
          className="w-full px-4 py-2 outline-none border-2 rounded-md border-blue-100 hover:border-2 hover:border-blue-300"
          type="text"
          placeholder="Search for a product..."
        />
      </div>
      <div className="flex items-center justify-between gap-6 relative">
        <div ref={cartDropDownRef}>
          <FaShoppingCart
            onClick={toggleCartIcon}
            className="text-3xl text-zinc-500 cursor-pointer"
          />
          <p className="absolute flex items-center justify-center text-[.9rem] font-bold -top-1 right-11 w-5 h-5 bg-red-500 text-white rounded-full">
            {cart.length}
          </p>
          {isCartOpen && (
            <div className=" flex flex-col gap-4  w-[50rem] absolute right-16 top-10 mt-2 bg-white shadow-lg rounded-md p-6">
              {cart.length > 0 ? (
                <>
                  {cart.map((preProd) => {
                    return (
                      <div className=" flex items-center justify-between cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all ease-out px-3 p-4 rounded-md">
                        <div className="flex items-center justify-center gap-4">
                          <img
                            className="w-[5rem] rounded-md"
                            src={preProd.image}
                            alt=""
                          />
                          <h1 className="text-gray-700 font-semibold">
                            {preProd.name}
                          </h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <p className="flex items-center justify-center">
                            {preProd.price.split(".")}
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          <button>
                            <FaTrashAlt
                              onClick={handleDeleteCart}
                              className="text-2xl text-zinc-600 hover:text-zinc-800"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div>
                  <h1>Cart is empty !</h1>
                </div>
              )}
            </div>
          )}
        </div>

        <div ref={dropdownRef}>
          <FaUserCircle
            onClick={toggleUserIcon}
            className="text-3xl text-zinc-500 cursor-pointer"
          />
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2">
              {/* Dropdown Items */}
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
