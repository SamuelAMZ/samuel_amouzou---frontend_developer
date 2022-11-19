// built in hooks
import React, { useContext, useState, useEffect } from "react";

// contexts
import AllCapsuleContext from "../contexts/AllCapsuleContext";
import CurrentFilterOptionContext from "../contexts/CurentFilterOptionsContext";
import ResetFormContext from "../contexts/ResetFilterFormContext";
import CurrentPageContext from "../contexts/CurrentPageContext";

const Filters = () => {
  const { capsules } = useContext(AllCapsuleContext);
  const { options, setOptions } = useContext(CurrentFilterOptionContext);
  const { resetForm } = useContext(ResetFormContext);
  const { setPageNumber } = useContext(CurrentPageContext);

  // getting filters options from capsules context
  const [status, setStatus] = useState([]);
  const [type, setType] = useState([]);
  const [launch, setLaunch] = useState([]);

  // filters selected options
  const [statusOption, setStatusOptions] = useState("");
  const [typeOption, setTypeOptions] = useState("");
  const [launchOption, setLaunchOptions] = useState("");

  // a use effect that will reset filters values everytime capsules data change
  useEffect(() => {
    // console.log(capsules);
    if (capsules) {
      let statusArr = [];
      let typeArr = [];
      let launchArr = [];
      // getting status data
      capsules.forEach((elms) => {
        // status
        if (elms.status) {
          statusArr.push(elms.status);
        }
        // type
        if (elms.type) {
          typeArr.push(elms.type);
        }
        // original launch
        if (elms.original_launch) {
          launchArr.push(elms.original_launch);
        }
      });
      // remove duplicates before setting filters data
      const uniqueStatusData = Array.from(new Set(statusArr));
      const uniqueTypeData = Array.from(new Set(typeArr));
      const uniqueLaunchData = Array.from(new Set(launchArr));
      // setting filters data state
      setStatus(uniqueStatusData);
      setType(uniqueTypeData);
      setLaunch(uniqueLaunchData);
    }
  }, [capsules]);

  // handle choose of filters options
  const handleFilterChoices = (e) => {
    // for status
    if (e.target.getAttribute("id") === "status") {
      let selected = e.target.value.trim();
      // set the selected option to state
      setStatusOptions(selected);
    }

    // for type
    if (e.target.getAttribute("id") === "type") {
      let selected = e.target.value.trim();
      // set the selected option state
      setTypeOptions(selected);
    }

    // for launch
    if (e.target.getAttribute("id") === "launch") {
      let selected = e.target.value.trim();
      // set the selected option state
      setLaunchOptions(selected);
    }
  };

  // handle submit of filter options
  const hanldeFilterSubmit = (e) => {
    // prevent reload
    e.preventDefault();

    // reset current page
    setPageNumber(1);

    // verify if at least one option is selected
    let verify = [];
    if (statusOption) {
      verify.push("some");
    }
    if (typeOption) {
      verify.push("some");
    }
    if (launchOption) {
      verify.push("some");
    }

    if (verify.length > 0) {
      // set filtering state
      setOptions([
        { status: statusOption, type: typeOption, launch: launchOption },
      ]);
    } else {
      console.log("at least one term");
    }
  };

  // reset form
  useEffect(() => {
    setStatusOptions("");
    setTypeOptions("");
    setLaunchOptions("");
  }, [resetForm]);

  return (
    <div className="filter-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
      <div className="headline">
        <h3>Live Filters</h3>
      </div>
      <div className="filters">
        <form id="filterform" onSubmit={hanldeFilterSubmit}>
          {/* status options */}
          <select
            id="status"
            className="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 "
            onChange={handleFilterChoices}
            value={statusOption}
          >
            <option value={""}>Choose a status</option>
            {status &&
              status.map((elm, idx) => {
                return (
                  <option key={idx} value={elm}>
                    {elm}
                  </option>
                );
              })}
          </select>

          {/* types options */}
          <select
            id="type"
            className="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 "
            onChange={handleFilterChoices}
            value={typeOption}
          >
            <option value={""}>Choose a type</option>
            {type &&
              type.map((elm, idx) => {
                return (
                  <option key={idx} value={elm}>
                    {elm}
                  </option>
                );
              })}
          </select>

          {/* launch options */}
          <select
            id="launch"
            className="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 "
            onChange={handleFilterChoices}
            value={launchOption}
          >
            <option value={""}>Choose a original launch</option>
            {launch &&
              launch.map((elm, idx) => {
                return (
                  <option key={idx} value={elm}>
                    {elm}
                  </option>
                );
              })}
          </select>

          <button className="rounded-xl">Filter</button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
