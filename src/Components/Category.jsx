import React from "react";
import { FaCircle } from "react-icons/fa";
import { useCategory } from "../Context/CategoryContext";

const Category = (props) => {
  const { category, changeCategory } = useCategory();

  const handleClick = () => {
    changeCategory(props.name.toLowerCase());
  };

  return (
    <div
      onClick={handleClick}
      className="px-12 py-4 grid grid-flow-col justify-between items-center border border-t-0 border-e-0 border-zinc-300 cursor-pointer"
    >
      <div className="text-zinc-500 flex items-center gap-2">
        <FaCircle className="" />
        <h2>{props.name}</h2>
      </div>
      <div className="bg-red-500 text-white text-sm px-4 py-1 rounded-md">
        {props.count}
      </div>
    </div>
  );
};

export default Category;
