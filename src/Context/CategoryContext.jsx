import React, { createContext, useState, useContext } from "react";

// Create a Context object
const CategoryContext = createContext("all notes");

// Create a Provider component
export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("all notes");

  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// Create a custom hook for using the category context
export function useCategory() {
  return useContext(CategoryContext);
}
