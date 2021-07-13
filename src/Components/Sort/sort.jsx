import React, { useState } from "react";
import "./sort.style.scss";

export const Sort = ({ count, children, onClick, isActive, data }) => {
  const [isActiveLink, setActiveLink] = useState(true);

  const heandler = () => {
    setActiveLink(!isActiveLink);
  };

  return (
    <div className="sortContainer">
      <div className="sortCount">{(count = data.length)} movies found</div>
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
