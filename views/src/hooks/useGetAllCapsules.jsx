import { useEffect, useState, useContext } from "react";

// contexts
import IsloadingCapsulesContext from "../contexts/IsLoadingCapsulesContext";

const useGetAllCapsules = (currentUrl) => {
  const { isLoading, setIsLoading } = useContext(IsloadingCapsulesContext);
  const [currentData, setCurrentData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const sendFetch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/all`);
        const serverMessage = await response.json();

        setCurrentData(serverMessage);
        setIsLoading(false);
        setIsError(null);
      } catch (err) {
        setIsLoading(false);
        setIsError(err);
      }
    };

    sendFetch();
  }, [currentUrl]);

  return { currentData, isError, isLoading };
};

export default useGetAllCapsules;
