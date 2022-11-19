// built in hooks
import React, { useState, useContext, useEffect } from "react";

// custom hooks
import useGetAllCapsules from "../hooks/useGetAllCapsules";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";
import AllCapsuleContext from "../contexts/AllCapsuleContext";
import IsloadingCapsulesContext from "../contexts/IsLoadingCapsulesContext";
import CurrentFilterOptionContext from "../contexts/CurentFilterOptionsContext";

// components
import SingleCard from "./SingleCard";
import Pagination from "./Pagination";
import Popup from "./Popup";

const Cards = () => {
  const { active } = useContext(IsPopupOpenContext);
  const { setCapsules } = useContext(AllCapsuleContext);
  const { options } = useContext(CurrentFilterOptionContext);
  const [isLoading, setIsLoading] = useState(false);

  // fetch all capsules
  const { currentData: capsulesData, isError } = useGetAllCapsules(
    `${process.env.REACT_APP_DOMAIN}/all`
  );

  useEffect(() => {
    if (capsulesData) {
      // console.log(capsulesData);
      setIsLoading(false);
      // set capsules globally in the capsules context
      setCapsules(capsulesData);
    } else {
      setIsLoading(true);
    }
  }, [capsulesData]);

  // handle filtering
  const handleFiltering = (capsuleBrute) => {
    let filtersArr = [];
    // check if at least one filter option is available
    if (options[0]) {
      // filter status
      if (options[0].status) {
        const statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          }
        });
        filtersArr.push(...statusFilter);
      }

      // filter type
      if (options[0].type) {
        const typeFirlter = capsuleBrute.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          }
        });
        filtersArr.push(...typeFirlter);
      }

      // filter launch
      if (options[0].launch) {
        const launchFirlter = capsuleBrute.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          }
        });
        filtersArr.push(...launchFirlter);
      }
    }

    return filtersArr;
  };

  // handle filtering
  const handleMatchFiltering = (capsuleBrute) => {
    // check if at least one filter option is available
    if (options[0]) {
      // 1 match
      // filter status
      if (options[0].status && !options[0].type && !options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          }
        });

        return statusFilter;
      }

      // 1 match
      // filter type
      if (!options[0].status && options[0].type && !options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          }
        });

        return statusFilter;
      }

      // 1 match
      // filter launch
      if (!options[0].status && !options[0].type && options[0].launch) {
        const final = capsuleBrute.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          }
        });

        return final;
      }

      // 2 matches
      // filter status & type
      if (options[0].status && options[0].type && !options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          }
        });

        return final;
      }

      // 2 matches
      // status & launch
      if (options[0].status && !options[0].type && options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          }
        });

        return final;
      }

      // 2 matches
      // type & launch
      if (!options[0].status && options[0].type && options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          }
        });

        return final;
      }

      // 3 matches
      // status & type & launch
      if (options[0].status && options[0].type && options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          }
        });

        const pre = statusFilter.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          }
        });

        const final = pre.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          }
        });

        return final;
      }
    }

    return capsuleBrute;
  };

  return (
    <>
      <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        {capsulesData &&
          handleMatchFiltering(capsulesData).map((elm, idx) => (
            <SingleCard data={elm} key={idx} />
          ))}
      </div>

      {/* pagination */}
      <Pagination />

      {/* popup */}
      {active && <Popup />}
    </>
  );
};

export default Cards;
