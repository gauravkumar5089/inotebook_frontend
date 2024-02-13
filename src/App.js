import React, { useState, useContext } from "react";
import { SidebarVisibilityProvider } from "./Context/SidebarVisibilityContext";
import { CategoryProvider } from "./Context/CategoryContext";
import AddNote from "./Components/AddNote";
import Home from "./Components/Home";

const App = () => {
  return (
    <SidebarVisibilityProvider>
      <CategoryProvider>
        {/* <Home /> */}
        <AddNote />
      </CategoryProvider>
    </SidebarVisibilityProvider>
  );
};

export default App;
