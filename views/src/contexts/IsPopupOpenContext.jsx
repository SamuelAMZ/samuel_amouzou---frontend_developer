import { createContext, useState } from "react";

const IsPopupOpenContext = createContext();

export const IsPopupOpenProvider = ({ children }) => {
  const [active, changeActive] = useState(false);

  const setActive = (newActive) => {
    changeActive(newActive);
  };

  return (
    <IsPopupOpenContext.Provider value={{ active, setActive }}>
      {children}
    </IsPopupOpenContext.Provider>
  );
};

export default IsPopupOpenContext;
