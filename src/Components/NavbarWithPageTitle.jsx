import React from "react";

const NavbarWithPageTitle = (props) => {
  return (
    <div className="py-4 px-8 sm:px-12 flex items-center bg-neutral-300">
      <h1 className="text-xl text-zinc-700 font-bold">{props.title}</h1>
    </div>
  );
};

export default NavbarWithPageTitle;
