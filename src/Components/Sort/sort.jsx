import React, { useState } from "react";
import "./sort.style.scss";

export const Sort = ({ count, children, onClick, isActive }) => {
  const [isActiveLink, setActiveLink] = useState(true);

  const heandler = () => {
    setActiveLink(!isActiveLink);
  };

  return (
    <div className="sortContainer">
      <div className="sortCount">{(count = 8)} movies found</div>
      <div className="sortBy">
        Sort by
        <a
          className={isActiveLink ? "sortA activeA" : "sortA"}
          onClick={heandler}
        >
          release date
        </a>
        <a
          className={!isActiveLink ? "sortA activeA" : "sortA"}
          onClick={heandler}
        >
          rating
        </a>
      </div>
    </div>
  );
};
