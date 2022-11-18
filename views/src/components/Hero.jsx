import React from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
      <div className="hero-elements">
        <h1>
          put your footprint in <span>space travel</span>
        </h1>
        <button>
          <p>Get Started</p>
          <BsArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
