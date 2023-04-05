import React, { createContext, useState } from "react";

//Drawer context
export type ToggleDrawerValues = {
  isOpen: boolean;
  toggle: () => void;
};

export const DrawerContext = createContext<ToggleDrawerValues>({
  isOpen: false,
  toggle: () => ({}),
});

type DrawerProviderProps = {
  children: React.ReactNode;
};

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, toggleDrawerHandler] = useState(false);
  function onToggleClickHandler() {
    toggleDrawerHandler((prev) => !prev);
  }
  return (
    <DrawerContext.Provider value={{ isOpen: isOpen, toggle: onToggleClickHandler }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
