import React, { ReactElement } from 'react';
import './sortdescription.style.scss';
import { useSelector } from 'react-redux';
import { selectChosenMovie } from '../../store/movies/movies.selectors';

export const SortDescription = (): ReactElement => {
    const chosenMovie = useSelector(selectChosenMovie);

    if (!chosenMovie) {
        return null;
    }

    const { genres } = chosenMovie;
    return (
        <div className="sortDescriprionContainer">
            <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
        </div>
    );
};
