import React, { useContext, useState } from "react";
import Category from "./Category";
import { useSidebarVisibility } from "../Context/SidebarVisibilityContext";
import { useCategory } from "../Context/CategoryContext";
import { RxCross1 } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import AddCategoryModal from "./AddCategoryModal";

const categoriesArray = [
  { name: "All Notes", count: 20 },
  { name: "Work", count: 5 },
  { name: "Personal", count: 3 },
  { name: "Travel", count: 4 },
  { name: "Food", count: 1 },
  { name: "Others", count: 2 },
  { name: "Trash", count: 5 },
];

const Sidebar = () => {
  const [addCategoryVisibility, setaddCategoryVisibility] = useState(false);

  const toggleAddCategoryVisibility = () => {
    setaddCategoryVisibility(!addCategoryVisibility);
  };

  const { sidebarVisibility, toggleSidebarVisibility } = useSidebarVisibility();
  const { category, changeCategory } = useCategory();

  if (!sidebarVisibility) {
    return null;
  }
  return (
    <div className="grid grid-flow-row border border-t-0 border-zinc-300">
      {addCategoryVisibility ? <AddCategoryModal /> : ""}
      <div
        className="flex gap-4 items-center px-12 py-4 text-xl bg-neutral-300
      -300"
      >
        <RxCross1
          className="cursor-pointer "
          onClick={toggleSidebarVisibility}
        />
        <h1 className="">Categories</h1>
      </div>
      <ul className="grid grid-flow-row">
        {categoriesArray.map((item, index) => (
          <li key={index}>
            <Category name={item.name} count={item.count} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center py-4">
        <IoIosAddCircle
          className="text-6xl text-zinc-700 cursor-pointer"
          onClick={toggleAddCategoryVisibility}
        />
      </div>
    </div>
  );
};

export default Sidebar;
