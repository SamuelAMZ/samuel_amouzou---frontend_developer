// built in hooks
import React, { useContext } from "react";

// contexts
import SideMenuOpenContext from "../contexts/IsSideMenuOpenContext";

// icons
import { MdClose } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Sidemenu = () => {
  const { setActive } = useContext(SideMenuOpenContext);

  // close menu when clicked
  const handleMenuClick = () => {
    setActive(false);
  };

  return (
    <>
      <div className="back" onClick={() => setActive(false)}></div>
      <div className="side-menu">
        <ul onClick={handleMenuClick}>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#filters">
            <li>Filters</li>
          </a>
          <a href="#capsules">
            <li>Capsules</li>
          </a>
        </ul>

        <a href="#filters" onClick={handleMenuClick}>
          <div className="mobile-account">
            <p>Account</p>
            <BsArrowRight className="icon" />
          </div>
        </a>
      </div>
      <div className="close" onClick={() => setActive(false)}>
        <MdClose />
      </div>
    </>
  );
};

export default Sidemenu;
