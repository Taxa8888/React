import React from "react";
import "./sort.style.scss";

export const Sort = ({ count, children, onClick, isActive }) => {
  count = 8;
  return (
    <div className="sort-container">
      <div className="sort-count">{count} movies found</div>
      <div className="sort-by">
        Sort by <a className="sort-a active-a">release date</a>
        <a className="sort-a">rating</a>
      </div>
    </div>
  );
};
