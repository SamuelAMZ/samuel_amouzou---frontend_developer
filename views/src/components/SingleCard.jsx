import React, { useContext } from "react";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";
import ActiveCapsuleContext from "../contexts/ActiveCapsuleContext";

const SingleCard = ({ data }) => {
  const { setActive } = useContext(IsPopupOpenContext);
  const { setActiveCapsule } = useContext(ActiveCapsuleContext);
  // handling click of single capsule
  const handleSingleCapsule = () => {
    // show popup of single capsule
    setActive(true);
    // passing single capsule data required for it s fetch request
    setActiveCapsule(data.capsule_serial);
  };

  return (
    <div className="card" onClick={handleSingleCapsule}>
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
