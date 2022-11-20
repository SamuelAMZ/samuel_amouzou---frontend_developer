import { useEffect, useState } from "react";

const useGetOneCapsule = (data) => {
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
        setIsError(null);
      } catch (err) {
        setIsError(err);
        console.log(err);
      }
    };

    sendFetch();
  }, [data]);

  return { currentData, isError };
};

export default useGetOneCapsule;
