import { createContext, useState } from "react";

const IsloadingCapsulesContext = createContext();

export const IsloadingCapsulesProvider = ({ children }) => {
  const [isLoading, changeActive] = useState(false);

  const setIsLoading = (newActive) => {
    changeActive(newActive);
  };

  return (
    <IsloadingCapsulesContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsloadingCapsulesContext.Provider>
  );
};

export default IsloadingCapsulesContext;
