import React from "react";
import Categories from "./SideBar";
import Notes from "./Notes";
import Navbar from "./Navbar";

const MainSection = () => {
  return (
    <div className=" grid grid-cols-4 h-screen">
      <div className="bg-purple-300 col-span-1">
        <Categories />
      </div>
      <div className="bg-purple-100 col-span-3">
        <Navbar />
        <Notes />
      </div>
    </div>
  );
};

export default MainSection;
