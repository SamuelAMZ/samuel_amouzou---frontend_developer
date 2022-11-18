// built in hooks
import { useContext } from "react";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";

// components
import SingleCard from "./SingleCard";
import Pagination from "./Pagination";
import Popup from "./Popup";

import React from "react";

const Cards = () => {
  const { active } = useContext(IsPopupOpenContext);

  return (
    <>
      <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-15">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>

      {/* pagination */}
      <Pagination />

      {/* popup */}
      {active && <Popup />}
    </>
  );
};

export default Cards;
