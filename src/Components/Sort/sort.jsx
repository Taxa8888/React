import React from "react";
import "./sort.style.scss";

export const Sort = ({ count, children, onClick, isActive }) => {
  return (
    <div className="sortContainer">
      <div className="sortCount">{(count = 8)} movies found</div>
      <div className="sortBy">
        Sort by <a className="sortA activeA">release date</a>
        <a className="sortA">rating</a>
      </div>
    </div>
  );
};
