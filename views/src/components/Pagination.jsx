import React from "react";

// icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div className="pagination-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
      <div className="mover previous hidden md:flex">
        <BsArrowLeft /> prev
      </div>
      <div className="steps">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">2</div>
        <div className="step">3</div>
      </div>
      <div className="mover next hidden md:flex">
        next <BsArrowRight />
      </div>

      {/* mobile next & previous */}
      <div className="mobilenext grid md:hidden">
        <div className="mover flex">
          <BsArrowLeft />
          previous
        </div>
        <div className="mover flex">
          next <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
