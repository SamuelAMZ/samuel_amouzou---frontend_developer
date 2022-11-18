// built in hooks
import React, { useContext } from "react";

// contexts
import SideMenuOpenContext from "../contexts/IsSideMenuOpenContext";

// icons
import { MdClose } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Sidemenu = () => {
  const { setActive } = useContext(SideMenuOpenContext);

  return (
    <>
      <div className="back" onClick={() => setActive(false)}></div>
      <div className="side-menu">
        <ul>
          <li>Home</li>
          <li>Filters</li>
          <li>Capsules</li>
        </ul>

        <div className="mobile-account">
          <p>Account</p>
          <BsArrowRight className="icon" />
        </div>
      </div>
      <div className="close" onClick={() => setActive(false)}>
        <MdClose />
      </div>
    </>
  );
};

export default Sidemenu;
