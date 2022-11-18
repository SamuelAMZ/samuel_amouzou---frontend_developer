import React from "react";

const Filters = () => {
  return (
    <div className="filter-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
      <div className="headline">
        <h3>Some Filters</h3>
      </div>
      <div className="filters">
        <form>
          <select class="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 ">
            <option selected>Choose an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select class="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 ">
            <option selected>Choose an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select class="border rounded-xl focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 ">
            <option selected>Choose an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <button className="rounded-xl">Filter</button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
