import SingleCard from "./SingleCard";

import React from "react";

const Cards = () => {
  return (
    <div className="cards-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
};

export default Cards;
