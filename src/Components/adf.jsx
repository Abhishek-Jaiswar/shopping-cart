import React, { useEffect, useReducer, useRef } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleCartOpen":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "toggleUserOpen":
      return { ...state, isUserOpen: !state.isUserOpen };
    default:
      return state;
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, {
    isCartOpen: false,
    isUserOpen: false,
  });
  const cartDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const handleCartIconClick = () => {
    dispatch({ type: "toggleCartOpen" });
  };

  const handleUserIconClick = () => {
    dispatch({ type: "toggleUserOpen" });
  };

  const handleClickOutside = (event) => {
    if (
      cartDropdownRef.current &&
      !cartDropdownRef.current.contains(event.target)
    ) {
      dispatch({ type: "toggleCartOpen" });
    }
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      dispatch({ type: "toggleUserOpen" });
    }
  };

  useEffect(() => {
    if (state.isCartOpen || state.isUserOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state.isCartOpen, state.isUserOpen]);

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
        <div ref={cartDropdownRef}>
          <FaShoppingCart
            onClick={handleCartIconClick}
            className="text-3xl text-zinc-500 cursor-pointer"
          />
          {state.isCartOpen && (
            <div className="absolute right-7 top-5 mt-2 bg-white shadow-lg rounded-md p-2">
              {/* Cart Dropdown Content */}
              <div>
                <div>
                  <img src="" alt="" />
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

        <div ref={userDropdownRef}>
          <FaUserCircle
            onClick={handleUserIconClick}
            className="text-3xl text-zinc-500 cursor-pointer"
          />
          {state.isUserOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2">
              {/* User Dropdown Content */}
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
