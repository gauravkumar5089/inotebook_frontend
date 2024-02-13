import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NoteContent = (props) => {
  const { title, body, category, time, date, setDeleteConfirmationVisibility } =
    props;

  const handleDelete = () => {
    setDeleteConfirmationVisibility(true);
  };
  return (
    <div className="bg-pink-200 text-zinc-700 py-4 px-8 rounded-3xl grid gap-3">
      <div className="flex text-zinc-800 text-lg font-bold justify-between">
        <h1>{title}</h1>
        <button className=" px-2 bg-pink-500 text-white text-sm font-bold rounded-md">
          {category.toUpperCase()}
        </button>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 text-lg">
          <FaRegEdit className="cursor-pointer" />
          <MdDelete onClick={handleDelete} className="cursor-pointer" />
        </div>
        <div className="">
          <span>{time}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteContent;
