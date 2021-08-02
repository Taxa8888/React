import React from 'react';
import './sortdescription.style.scss';

const SortDescriprion = ({ chosenMovie }) => (
    <div className="sortDescriprionContainer">
        <div className="sortDescriprionBy">{`Films by ${chosenMovie.genresFilm.slice(
            0,
            1
        )} genre`}</div>
    </div>
);

export default SortDescriprion;
