import { createContext, useState } from "react";

const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
  const [steps, changeActive] = useState("");

  const setSteps = (newActive) => {
    changeActive(newActive);
  };

  return (
    <StepsContext.Provider value={{ steps, setSteps }}>
      {children}
    </StepsContext.Provider>
  );
};

export default StepsContext;
