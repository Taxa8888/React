import React from 'react';
import './sortdescription.style.scss';

const SortDescriprion = ({ chosenMovie: { genres } }) => (
    <div className="sortDescriprionContainer">
        <div className="sortDescriprionBy">{`Films by ${genres.slice(0, 1)} genre`}</div>
    </div>
);

export default SortDescriprion;
