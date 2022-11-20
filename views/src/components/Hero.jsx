import React from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-15">
      <div className="hero-elements">
        <h1>
          Space_X API Frontend
          <br /> <span>Assessment</span>
        </h1>
        <a href="#filters">
          <button>
            <p>Get Started</p>
            <BsArrowRight className="icon" />
          </button>
        </a>
      </div>

      {/* mobile hero */}
      <img
        className="mobile-hero md:hidden"
        src="./images/mobile-hero.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
