import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";

const App = () => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose((prevState) => !prevState);
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <header
        className={`h-full p-3 w-1/5 sticky top-0 bg-slate-200 transition-all ease-in-out duration-500 ${
          isClose ? " -m-[20%] transition-all ease-in-out duration-500" : ""
        }`}
      >
        <Sidebar isClose={isClose} handleClose={handleClose} />
      </header>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto bg-blue-50 ${
          isClose ? " ml-[20%] transition-all ease-in-out duration-500" : ""
        }`}
      >
        <div className="container mx-auto p-4 px-12">
          <Navbar />
          <div className="py-10 px-5">
            <MainContent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
