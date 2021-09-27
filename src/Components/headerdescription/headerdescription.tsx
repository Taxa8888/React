import React, { ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import { Button } from '../button/button';
import './headerdescription.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clickOnSearch } from '../../store/movies/movies.actions';
import { selectChosenMovie } from '../../store/movies/movies.selectors';
import { MovieImage } from '../movieImage/movieImage';

export const HeaderDescription = (): ReactElement => {
    const chosenMovie = useSelector(selectChosenMovie);

    const dispatch = useDispatch();

    const onSearchByButton = () => {
        dispatch(clickOnSearch(''));
    };

    if (!chosenMovie) {
        return null;
    }

    const { title, posterPath, releaseDate, runtime, overview } = chosenMovie;

    return (
        <div className="headerDescription" style={HEADER_BG_IMAGE}>
            <div className="headerDescriptionContainer">
                <div className="navElements">
                    <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                    <Button
                        onClick={onSearchByButton}
                        className="button"
                        style={{ marginLeft: '40rem' }}
                    >
                        SEARCH
                    </Button>
                </div>
                <div className="fimlDescription">
                    <MovieImage
                        title={title}
                        posterPath={posterPath}
                        className="descriptionMovieImg"
                    />
                    <div className="aboutFilm">
                        <p className="filmTitle">{title}</p>
                        <span className="filmDate">{releaseDate.slice(0, 4)}</span>
                        <span className="filmTime">{`${runtime} min`}</span>
                        <p className="filmOverview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
