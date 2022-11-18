import React, { useContext } from "react";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";

const SingleCard = () => {
  const { setActive } = useContext(IsPopupOpenContext);

  return (
    <div className="card" onClick={() => setActive(true)}>
      <img src="./images/mars1.png" alt="mars" />
      <h3>Mars Demo</h3>
      <hr />
      <h4>Mars demo text</h4>
    </div>
  );
};

export default SingleCard;
