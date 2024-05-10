import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Ratings from "./Ratings";

const Sidebar = ({ handleClose, isClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [rating, setRating] = useState(0);
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
      <div className=" relative flex items-center justify-between px-8 bg-zinc-100 rounded-md py-3">
        <h1 className=" text-2xl text-zinc-800 font-bold">Shopping cart</h1>
        <IoMdArrowDroprightCircle
          onClick={handleClose}
          className={`absolute right-3 cursor-pointer text-3xl text-zinc-500 hover:text-zinc-600 ${
            isClose ? " -right-[3.2rem]" : ""
          }`}
        />
      </div>
      <div className=" flex flex-col gap-8 items-start justify-start p-3 mt-3">
        {[
          "Category 1",
          "Category 2",
          "Category 3",
          "Category 4",
          "Category 5",
        ].map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-start px-3 py-2 rounded-md gap-2 bg-blue-50 hover:bg-blue-100 w-full "
          >
            <input
              className="text-gray-700 font-semibold"
              type="radio"
              id={`categoryRadio${index}`}
              name="categoryRadio"
            />
            <label htmlFor={`categoryRadio${index}`}>{category}</label>
          </div>
        ))}
        <div>
          <div className=" flex flex-col items-center justify-center gap-2">
            <h1 className="text-gray-800 font-semibold">By Ratings</h1>
            <Ratings onClick={(i) => setRating(i + 1)}  rating={rating} />
          </div>
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
