import React from 'react';
import './sortdescription.style.scss';

const SortDescription = ({ chosenMovie: { genres } }) => (
    <div className="sortDescriprionContainer">
        <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
    </div>
);

export default SortDescription;
