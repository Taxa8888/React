import React from 'react';
import './sortdescription.style.scss';

const SortDescriprion = ({ data, chosenMovie }) => {
    const correctMovie = data.filter(({ idFilm }) => idFilm === chosenMovie);

    return (
        <div className="sortDescriprionContainer">
            <div className="sortDescriprionBy">{`Films by ${correctMovie[0].genresFilm.slice(
                0,
                1
            )} genre`}</div>
        </div>
    );
};

export default SortDescriprion;
