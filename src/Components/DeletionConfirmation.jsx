import React from "react";

const DeletionConfirmation = (props) => {
  const { setDeleteConfirmationVisibility } = props;
  const handleDelete = () => {
    setDeleteConfirmationVisibility(false);
  };

  const handleCancel = () => {
    setDeleteConfirmationVisibility(false);
  };

  return (
    <div className="text-center bg-pink-200 text-zinc-700 py-4 px-8 rounded-3xl grid gap-3">
      <div className="flex flex-col gap-4 text-zinc-800 text-lg font-bold justify-center">
        <h1>Are you sure?</h1>
        <span className="">
          <button
            onClick={handleDelete}
            className=" px-12 py-3 bg-pink-500 text-white text-sm font-bold rounded-md"
          >
            Delete
          </button>
        </span>
        <span className="">
          <button
            onClick={handleCancel}
            className=" px-12 py-3 bg-pink-500 text-white text-sm font-bold rounded-md"
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  );
};

export default DeletionConfirmation;
