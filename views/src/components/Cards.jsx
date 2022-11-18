// built in hooks
import React, { useState, useContext, useEffect } from "react";

// custom hooks
import useGetAllCapsules from "../hooks/useGetAllCapsules";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";
import AllCapsuleContext from "../contexts/AllCapsuleContext";
import IsloadingCapsulesContext from "../contexts/IsLoadingCapsulesContext";

// components
import SingleCard from "./SingleCard";
import Pagination from "./Pagination";
import Popup from "./Popup";

const Cards = () => {
  const { active } = useContext(IsPopupOpenContext);
  const [isLoading, setIsLoading] = useState(false);

  // fetch all capsules
  const { currentData: capsulesData, isError } = useGetAllCapsules(
    `${process.env.REACT_APP_DOMAIN}/all`
  );

  // fetch(`${process.env.REACT_APP_DOMAIN}/all`, {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    if (capsulesData) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [capsulesData]);

  return (
    <>
      <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        {capsulesData &&
          capsulesData.map((elm, idx) => <SingleCard data={elm} key={idx} />)}
      </div>

      {/* pagination */}
      <Pagination />

      {/* popup */}
      {active && <Popup />}
    </>
  );
};

export default Cards;
