import { useEffect, useState, useContext } from "react";

// contexts
import IsloadingCapsulesContext from "../contexts/IsLoadingCapsulesContext";

const useGetOneCapsule = (currentUrl, data) => {
  const { isLoading, setIsLoading } = useContext(IsloadingCapsulesContext);
  const [currentData, setCurrentData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const sendFetch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/one`, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const serverMessage = await response.json();

        setCurrentData(serverMessage);
        setIsLoading(false);
        setIsError(null);
      } catch (err) {
        setIsLoading(false);
        setIsError(err);
        console.log(err);
      }
    };

    sendFetch();
  }, [data]);

  return { currentData, isError, isLoading };
};

export default useGetOneCapsule;
