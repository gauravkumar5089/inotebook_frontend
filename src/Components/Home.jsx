import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Notes from "./Notes";
import { useSidebarVisibility } from "../Context/SidebarVisibilityContext";

const Home = () => {
  const { sidebarVisibility, setSidebarVisibility } = useSidebarVisibility();
  return (
    <div className="bg-zinc-50 grid  grid-cols-4 h-screen">
      {sidebarVisibility ? (
        <>
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3">
            <Navbar />
            <Notes />
          </div>
        </>
      ) : (
        <>
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-4">
            <Navbar />
            <Notes />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
