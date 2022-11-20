// built in hooks
import React, { useContext } from "react";

// contexts
import SideMenuOpenContext from "../contexts/IsSideMenuOpenContext";

// components imports
import Sidemenu from "./Sidemenu";

// icons
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const { active, setActive } = useContext(SideMenuOpenContext);

  return (
    <div
      id="top"
      className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-15 "
    >
      <div className="logo">
        <a href="#top">
          <img src="./images/logo.png" alt="logo" />
        </a>
      </div>

      {/* tablet & desktop elements */}
      <div className="menu hidden md:block">
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#filters">Filters</a>
          </li>
          <li>
            <a href="#capsules">Capsules</a>
          </li>
        </ul>
      </div>
      <a href="#filters">
        <div className="account hidden md:flex">
          {" "}
          <p>Start</p>
          <BsArrowRight className="icon" />
        </div>
      </a>

      {/* mobile menu icon */}
      <div
        className="mobile-menu-icon block md:hidden"
        onClick={() => setActive(true)}
      >
        <HiOutlineMenuAlt3 className="icon" />
      </div>

      {/* side menu */}
      {active && <Sidemenu />}
    </div>
  );
};

export default Header;
