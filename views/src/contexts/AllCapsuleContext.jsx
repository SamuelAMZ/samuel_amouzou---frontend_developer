import { createContext, useState } from "react";

const AllCapsulesContext = createContext();

export const AllCapsulesProvider = ({ children }) => {
  const [capsules, changeActive] = useState([]);

  const setCapsules = (newActive) => {
    changeActive(newActive);
  };

  return (
    <AllCapsulesContext.Provider value={{ capsules, setCapsules }}>
      {children}
    </AllCapsulesContext.Provider>
  );
};

export default AllCapsulesContext;
