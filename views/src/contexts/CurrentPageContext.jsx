import { createContext, useState } from "react";

const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
  const [pageNumber, changeActive] = useState(1);

  const setPageNumber = (newActive) => {
    changeActive(newActive);
  };

  return (
    <CurrentPageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export default CurrentPageContext;
