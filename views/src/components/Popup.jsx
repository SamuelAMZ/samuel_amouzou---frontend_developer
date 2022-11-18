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
  const { currentData: capsuleData, isError } = useGetOneCapsule(
    `${process.env.REACT_APP_DOMAIN}/all`,
    activeCapsule
  );

  useEffect(() => {
    console.log(capsuleData);
  }, [capsuleData]);

  return (
    <>
      <div className="backpop" onClick={() => setActive(false)}></div>
      <div className="popup-container">
        {capsuleData ? <p>{capsuleData[0].capsule_serial}</p> : "loading..."}
      </div>

      <div className="closepop" onClick={() => setActive(false)}>
        <MdClose />
      </div>
    </>
  );
};

export default Popup;
