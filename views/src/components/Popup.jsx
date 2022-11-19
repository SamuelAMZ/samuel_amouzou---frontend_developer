// built in context
import React, { useEffect, useContext } from "react";

// custom hooks
import useGetOneCapsule from "../hooks/useGetOneCapsule";

// context
import IsPopupOpenContext from "../contexts/IsPopupOpenContext";
import ActiveCapsuleContext from "../contexts/ActiveCapsuleContext";

// icons
import { MdClose } from "react-icons/md";

const Popup = () => {
  const { setActive } = useContext(IsPopupOpenContext);
  const { activeCapsule } = useContext(ActiveCapsuleContext);

  // get the data of the single active capsule
  // fetch all capsules
  const { currentData: capsuleData, isError } = useGetOneCapsule(activeCapsule);

  useEffect(() => {
    console.log(capsuleData);
  }, [capsuleData]);

  return (
    <>
      <div className="backpop" onClick={() => setActive(false)}></div>
      <div className="popup-container">
        {capsuleData ? (
          <div className="single">
            <div className="singleimage hidden md:grid">
              <img src="/images/mars1.png" alt="" />
            </div>
            <div className="actualsingle-data">
              <p>
                Capsule Serial:{" "}
                {capsuleData[0].capsule_serial
                  ? capsuleData[0].capsule_serial
                  : "N/A"}
              </p>
              <p>
                Capsule ID:{" "}
                {capsuleData[0].capsule_id ? capsuleData[0].capsule_id : "N/A"}
              </p>
              <p>
                Capsule Details:{" "}
                {capsuleData[0].details ? capsuleData[0].details : "N/A"}
              </p>
              <p>
                Capsule landings:{" "}
                {capsuleData[0].landings ? capsuleData[0].landings : "N/A"}
              </p>
              <p>
                Capsule Original Launch:{" "}
                {capsuleData[0].original_launch
                  ? capsuleData[0].original_launch
                  : "N/A"}
              </p>
              <p>
                Capsule Original Launch Unix:{" "}
                {capsuleData[0].original_launch_unix
                  ? capsuleData[0].original_launch_unix
                  : "N/A"}
              </p>
              <p>
                Capsule Reuse Count:{" "}
                {capsuleData[0].reuse_count
                  ? capsuleData[0].reuse_count
                  : "N/A"}
              </p>
              <p>
                Capsule Status:{" "}
                {capsuleData[0].status ? capsuleData[0].status : "N/A"}
              </p>
              <p>
                Capsule Type:{" "}
                {capsuleData[0].type ? capsuleData[0].type : "N/A"}
              </p>
            </div>
          </div>
        ) : (
          "loading..."
        )}
      </div>

      <div className="closepop" onClick={() => setActive(false)}>
        <MdClose />
      </div>
    </>
  );
};

export default Popup;
