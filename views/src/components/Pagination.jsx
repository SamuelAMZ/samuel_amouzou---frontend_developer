import React, { useEffect, useContext } from "react";

// icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// context
import AllCapsuleContext from "../contexts/AllCapsuleContext";
import CurrentPageContext from "../contexts/CurrentPageContext";
import StepsContext from "../contexts/StepsContext";

const Pagination = ({ resultNumber }) => {
  const { steps, setSteps } = useContext(StepsContext);
  const { pageNumber, setPageNumber } = useContext(CurrentPageContext);
  const { capsules } = useContext(AllCapsuleContext);

  // determine how many steps
  useEffect(() => {
    if (resultNumber) {
      const stepsNum = Math.ceil(Number(resultNumber) / 6);
      // console.log(stepsNum + 1);
      if (stepsNum === 0) {
        setSteps(stepsNum + 1);
      } else {
        setSteps(stepsNum);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultNumber, capsules, pageNumber]);

  // get page number
  const setPageNumberFunc = (e) => {
    const number = Number(e.target.innerText);
    setPageNumber(number);
  };

  // handle next and previous clicks
  const handleNextPrev = (e) => {
    // next
    if (e.target.getAttribute("id") === "next") {
      if (pageNumber < steps) {
        setPageNumber(pageNumber + 1);
      }
    }
    // previous
    if (e.target.getAttribute("id") === "prev") {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  };

  return (
    <div className="pagination-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
      <div
        id="prev"
        className="mover previous hidden md:flex"
        onClick={handleNextPrev}
      >
        <BsArrowLeft /> prev
      </div>
      <div className="steps">
        {capsules &&
          capsules.slice(0, steps).map((elm, idx) => (
            <div
              key={idx}
              className={pageNumber === idx + 1 ? "active step" : "step"}
              onClick={setPageNumberFunc}
            >
              {idx + 1}
            </div>
          ))}
      </div>
      <div
        id="next"
        className="mover next hidden md:flex"
        onClick={handleNextPrev}
      >
        next <BsArrowRight />
      </div>

      {/* mobile next & previous */}
      <div className="mobilenext grid md:hidden">
        <div id="prev" className="mover flex" onClick={handleNextPrev}>
          <BsArrowLeft />
          previous
        </div>
        <div id="next" className="mover flex" onClick={handleNextPrev}>
          next <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
