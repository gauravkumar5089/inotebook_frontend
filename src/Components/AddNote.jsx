import React from "react";
import NavbarWithPageTitle from "./NavbarWithPageTitle";

const AddNote = () => {
  return (
    <>
      <NavbarWithPageTitle title="Add Note" />
      <div className="flex justify-center py-12 w-full bg-neutral-100">
        <div className="h-96 bg-white w-full sm:w-3/4 lg:w-3/5 shadow-2xl rounded-lg">
          <form action="">
            <input
              type="text"
              className="w-full h-12 px-4 border-b-2 border-zinc-500"
              placeholder="Title"
            />
            <input
              list="browsers"
              name="browser"
              placeholder="Select a category"
            />
            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-96 px-4 border-b-2 border-zinc-500"
              placeholder="Note"
            ></textarea>
            <input
              type="submit"
              value="Add Note"
              className="w-full h-12 bg-zinc-500 text-white cursor-pointer hover:bg-zinc-600"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNote;
