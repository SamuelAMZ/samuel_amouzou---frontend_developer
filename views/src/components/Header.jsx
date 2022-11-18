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
    <header className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5 ">
      <div className="logo">
        <a href="#home">
          <img src="./images/logo.png" alt="logo" />
        </a>
      </div>

      {/* tablet & desktop elements */}
      <div className="menu hidden md:block">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#filters">Filters</a>
          </li>
          <li>
            <a href="#capsules">Capsules</a>
          </li>
        </ul>
      </div>
      <div className="account hidden md:flex">
        <p>Account</p>
        <BsArrowRight className="icon" />
      </div>

      {/* mobile menu icon */}
      <div
        className="mobile-menu-icon block md:hidden"
        onClick={() => setActive(true)}
      >
        <HiOutlineMenuAlt3 className="icon" />
      </div>

      {/* side menu */}
      {active && <Sidemenu />}
    </header>
  );
};

export default Header;
