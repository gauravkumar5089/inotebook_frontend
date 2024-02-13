import React, { createContext, useState, useContext } from "react";

// Create a Context object
const SidebarVisibilityContext = createContext();

// Create a Provider component
export function SidebarVisibilityProvider({ children }) {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const toggleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  return (
    <SidebarVisibilityContext.Provider
      value={{ sidebarVisibility, toggleSidebarVisibility }}
    >
      {children}
    </SidebarVisibilityContext.Provider>
  );
}

// Create a custom hook for using the sidebar visibility context
export function useSidebarVisibility() {
  return useContext(SidebarVisibilityContext);
}
