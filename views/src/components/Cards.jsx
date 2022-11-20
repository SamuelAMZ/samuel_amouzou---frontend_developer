// built in hooks
import React, { useState, useContext, useEffect } from "react";

// custom hooks
import useGetAllCapsules from "../hooks/useGetAllCapsules";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";
import AllCapsuleContext from "../contexts/AllCapsuleContext";
import CurrentFilterOptionContext from "../contexts/CurentFilterOptionsContext";
import ResetFormContext from "../contexts/ResetFilterFormContext";
import CurrentPageContext from "../contexts/CurrentPageContext";
import StepsContext from "../contexts/StepsContext";

// components
import SingleCard from "./SingleCard";
import Pagination from "./Pagination";
import Popup from "./Popup";

const Cards = () => {
  const { active } = useContext(IsPopupOpenContext);
  const { setCapsules } = useContext(AllCapsuleContext);
  const { setOptions, options } = useContext(CurrentFilterOptionContext);
  const { resetForm, setResetForm } = useContext(ResetFormContext);
  const { pageNumber, setPageNumber } = useContext(CurrentPageContext);
  const { setSteps } = useContext(StepsContext);
  const [isLoading, setIsLoading] = useState(false);

  // check for filter combined or individual mode
  const [isChecked, setIsChecked] = useState(false);
  // keep track of how many card is available in the dom
  const [count, setCount] = useState(null);

  // fetch all capsules
  const { currentData: capsulesData } = useGetAllCapsules(
    `${process.env.REACT_APP_DOMAIN}/all`
  );

  useEffect(() => {
    if (capsulesData) {
      setIsLoading(false);
      // set capsules globally in the capsules context
      setCapsules(capsulesData);
    } else {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capsulesData]);

  // handle filtering individual match
  const handleFiltering = (capsuleBrute) => {
    let filtersArr = [];
    // check if at least one filter option is available
    if (options[0]) {
      // filter status
      if (options[0].status) {
        const statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          } else {
            return false;
          }
        });
        filtersArr.push(...statusFilter);
      }

      // filter type
      if (options[0].type) {
        const typeFirlter = capsuleBrute.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          } else {
            return false;
          }
        });
        filtersArr.push(...typeFirlter);
      }

      // filter launch
      if (options[0].launch) {
        const launchFirlter = capsuleBrute.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          } else {
            return false;
          }
        });
        filtersArr.push(...launchFirlter);
      }
    }

    if (options[0]) {
      return filtersArr;
    } else {
      return capsuleBrute;
    }
  };

  // handle filtering combined matches
  const handleMatchFiltering = (capsuleBrute) => {
    // check if at least one filter option is available
    if (options[0]) {
      // 1 match
      // filter status
      if (options[0].status && !options[0].type && !options[0].launch) {
        let statusFilter = capsuleBrute.filter((elm) => {
          if (elm.status) {
            return elm.status.includes(options[0].status);
          } else {
            return false;
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
          } else {
            return false;
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
          } else {
            return false;
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
          } else {
            return false;
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          } else {
            return false;
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
          } else {
            return false;
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          } else {
            return false;
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
          } else {
            return false;
          }
        });

        const final = statusFilter.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          } else {
            return false;
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
          } else {
            return false;
          }
        });

        const pre = statusFilter.filter((elm) => {
          if (elm.type) {
            return elm.type.includes(options[0].type);
          } else {
            return false;
          }
        });

        const final = pre.filter((elm) => {
          if (elm.original_launch) {
            return elm.original_launch.includes(options[0].launch);
          } else {
            return false;
          }
        });

        return final;
      }
    }

    return capsuleBrute;
  };

  // handle counts
  let resultsCount = [];
  const HandleCounts = (resultsArr) => {
    resultsCount.push(resultsArr.length);

    return resultsArr;
  };

  // default count
  useEffect(() => {
    if (capsulesData) {
      setCount(capsulesData.length);
    }
  }, [capsulesData]);

  // count on filtering
  useEffect(() => {
    setCount(resultsCount[resultsCount.length - 1]);
    // comme back to page one
    setPageNumber(1);
    // reset steps to one if result not found
    if (!count) {
      setSteps(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, options, count]);

  // reset filter
  const resetFilter = () => {
    // set options to default
    setOptions([]);
    //reset form fiels
    setResetForm(resetForm + 1);
    // reset page state
    setPageNumber(1);
  };

  // get the numbers for the slice
  const sliceNum = () => {
    return (Number(pageNumber) - 1) * 6;
  };

  return (
    <>
      {/* toggle type of macthes */}
      <div
        id="capsules"
        className="toggleer md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15"
      >
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

        {/* reset */}
        <button
          type="button"
          className="text-white bg-gray-800 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={resetFilter}
        >
          Reset Filter
        </button>
      </div>

      {/* count show */}
      <div className="count toggleer text-white">
        {count ? count + " results found" : "no result found"}
      </div>

      {/* cards */}
      <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        {capsulesData &&
          (isChecked
            ? HandleCounts(handleFiltering(capsulesData))
                .slice(sliceNum(), sliceNum() + 6)
                .map((elm, idx) => <SingleCard data={elm} key={idx} />)
            : HandleCounts(handleMatchFiltering(capsulesData))
                .slice(sliceNum(), sliceNum() + 6)
                .map((elm, idx) => <SingleCard data={elm} key={idx} />))}

        {/* when loading data */}
        {isLoading && <p className="loading">Loading capsules...</p>}
      </div>

      {/* pagination */}
      <Pagination resultNumber={count} />

      {/* popup */}
      {active && <Popup />}
    </>
  );
};

export default Cards;
