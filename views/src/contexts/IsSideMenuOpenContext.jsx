import { createContext, useState } from "react";

const SideMenuOpenContext = createContext();

export const SideMenuOpenProvider = ({ children }) => {
  const [active, changeActive] = useState(true);

  const setActive = (newActive) => {
    changeActive(newActive);
  };

  return (
    <SideMenuOpenContext.Provider value={{ active, setActive }}>
      {children}
    </SideMenuOpenContext.Provider>
  );
};

export default SideMenuOpenContext;
