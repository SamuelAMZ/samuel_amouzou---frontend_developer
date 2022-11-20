import { useEffect, useState } from "react";

const useGetAllCapsules = (currentUrl) => {
  const [currentData, setCurrentData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const sendFetch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/all`);
        const serverMessage = await response.json();

        setCurrentData(serverMessage);
        setIsError(null);
      } catch (err) {
        setIsError(err);
      }
    };

    sendFetch();
  }, [currentUrl]);

  return { currentData, isError };
};

export default useGetAllCapsules;
