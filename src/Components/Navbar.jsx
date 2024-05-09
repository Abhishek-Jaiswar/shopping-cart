import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import ReactImg from '../assets/react.svg'
import { FaTrashAlt } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartDropDownRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleUserIcon = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartIcon = () => {
    setCartOpen(!isCartOpen)
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
          {isCartOpen && (
            <div className=" flex flex-col gap-4  w-[50rem] absolute right-16 top-10 mt-2 bg-white shadow-lg rounded-md p-6">
              <div className="flex items-start justify-between cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all ease-out px-3 p-4 rounded-md">
                <div className="flex items-center justify-center gap-4">
                  <img src={ReactImg} alt="" />
                  <h1 className="text-gray-700 font-semibold">React Icons</h1>
                </div>
                <div>
                  <p>counter</p>
                </div>
                <div>
                  <p>$100</p>
                </div>
                <div>
                  <button><FaTrashAlt className="text-2xl text-zinc-600 hover:text-zinc-800" /></button>
                </div>
              </div>
              <div className="flex items-start justify-between bg-blue-50 px-3 p-4 rounded-md">
                <div>
                  <img src={ReactImg} alt="" />
                </div>
                <div>
                  <h1>heading</h1>
                </div>
                <div>counter</div>
                <div>price</div>
                <div>cancel</div>
              </div>
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
