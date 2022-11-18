import { createContext, useState } from "react";

const ActiveCapsuleContext = createContext();

export const ActiveCapsuleProvider = ({ children }) => {
  const [activeCapsule, changeActive] = useState(null);

  const setActiveCapsule = (newActive) => {
    changeActive(newActive);
  };

  return (
    <ActiveCapsuleContext.Provider value={{ activeCapsule, setActiveCapsule }}>
      {children}
    </ActiveCapsuleContext.Provider>
  );
};

export default ActiveCapsuleContext;
