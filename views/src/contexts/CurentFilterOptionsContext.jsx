import { createContext, useState } from "react";

const CurrentFilterOptionContext = createContext();

export const CurrentFilterOptionProvider = ({ children }) => {
  const [options, changeActive] = useState([]);

  const setOptions = (newActive) => {
    changeActive(newActive);
  };

  return (
    <CurrentFilterOptionContext.Provider value={{ options, setOptions }}>
      {children}
    </CurrentFilterOptionContext.Provider>
  );
};

export default CurrentFilterOptionContext;
