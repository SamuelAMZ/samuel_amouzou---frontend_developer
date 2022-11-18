import React, { useContext } from "react";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";

const SingleCard = ({ data }) => {
  const { setActive } = useContext(IsPopupOpenContext);

  return (
    <div className="card" onClick={() => setActive(true)}>
      {data ? (
        <>
          <img src="./images/mars1.png" alt="mars" />
          <h3>{data.capsule_serial}</h3>
          <hr />
          <h4>
            {data.original_launch
              ? data.original_launch
              : "No original launch data"}
          </h4>
        </>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default SingleCard;
