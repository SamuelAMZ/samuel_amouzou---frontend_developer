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

  // check for filter combined or individual mode
  const [isChecked, setIsChecked] = useState(false);

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

  // hanlde filter modes

  return (
    <>
      {/* toggle type of macthes */}
      <div className="toggleer md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isChecked ? "Individual match" : "Combined mathes"}
          </span>
        </label>
      </div>

      {/* cards */}
      <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        {capsulesData &&
          (isChecked
            ? handleFiltering(capsulesData).map((elm, idx) => (
                <SingleCard data={elm} key={idx} />
              ))
            : handleMatchFiltering(capsulesData).map((elm, idx) => (
                <SingleCard data={elm} key={idx} />
              )))}
      </div>

      {/* pagination */}
      <Pagination />

      {/* popup */}
      {active && <Popup />}
    </>
  );
};

export default Cards;
