import { createContext, useState } from "react";

const ResetFormContext = createContext();

export const ResetFormProvider = ({ children }) => {
  const [resetForm, changeActive] = useState(0);

  const setResetForm = (newActive) => {
    changeActive(newActive);
  };

  return (
    <ResetFormContext.Provider value={{ resetForm, setResetForm }}>
      {children}
    </ResetFormContext.Provider>
  );
};

export default ResetFormContext;
