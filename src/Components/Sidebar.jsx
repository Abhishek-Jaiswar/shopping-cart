import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const Sidebar = ({ handleClose, isClose }) => {
  const [isActive, setIsActive] = useState(false);
  const dropDownRef = useRef(null);

  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className=" relative flex items-center justify-center bg-zinc-100 rounded-md py-3">
        <h1 className=" text-2xl text-zinc-800 font-bold">Shopping cart</h1>
        <IoMdArrowDroprightCircle
          onClick={handleClose}
          className={`absolute right-3 cursor-pointer text-3xl text-zinc-500 hover:text-zinc-600 ${
            isClose ? " -right-[3.2rem]" : ""
          }`}
        />
      </div>
      <div className=" flex flex-col items-start justify-start p-3 mt-3">
        <div className=" flex items-center justify-center gap-3 bg-blue-50 px-10 py-2 rounded-md">
          <input type="radio" name="categoryRadio" />
          <label htmlFor="categoryRadio">Category</label>
        </div>
        <div>
          <input type="radio" name="categoryRadio" />
          <label htmlFor="categoryRadio">Category</label>
        </div>
        <div>
          <input type="radio" name="categoryRadio" />
          <label htmlFor="categoryRadio">Category</label>
        </div>
        <div>
          <input type="radio" name="categoryRadio" />
          <label htmlFor="categoryRadio">Category</label>
        </div>
        <div>
          <input type="radio" name="categoryRadio" />
          <label htmlFor="categoryRadio">Category</label>
        </div>
      </div>
      <div className=" absolute w-full bottom-0 left-0 p-4 bg-blue-100 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <FaUserCircle className="text-3xl text-zinc-700 " />
          <h1 className=" text-gray-700 font-semibold">Abhishek Jaiswar</h1>
        </div>
        <div ref={dropDownRef} className="relative">
          <HiDotsVertical
            onClick={toggleHandler}
            className="text-2xl font-bold cursor-pointer "
          />
          {isActive && (
            <div className=" absolute bottom-7 right-2 bg-white p-4 rounded-md">
              <ul className="flex flex-col items-center justify-center gap-2 ">
                <li className="hover:bg-gray-200 px-4 py-1 rounded-md text-gray-800 font-semibold transition-all ease-in duration-75 cursor-pointer ">
                  Settings
                </li>
                <li className="hover:bg-gray-200 px-4 py-1 rounded-md text-gray-800 font-semibold transition-all ease-in duration-75 cursor-pointer ">
                  History
                </li>
                <li className="hover:bg-gray-200 px-4 py-1 rounded-md text-gray-800 font-semibold transition-all ease-in duration-75 cursor-pointer ">
                  Account
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
