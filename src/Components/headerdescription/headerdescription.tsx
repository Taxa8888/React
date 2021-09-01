import React, { ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import { Button } from '../button/button';
import './headerdescription.style.scss';
import noImage from '../../assets/no_image.png';
import { useDispatch, useSelector } from 'react-redux';
import { clickOnSearch } from '../../store/movies/movies.actions';

export const HeaderDescription = (): ReactElement => {
    const { title, posterPath, releaseDate, runtime, overview } = useSelector(
        (store) => store.chosenMovie
    );
    const dispatch = useDispatch();

    const onSearchByButton = () => {
        dispatch(clickOnSearch(''));
    };

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
                    <img
                        className="descriptionMovieImg"
                        src={posterPath}
                        onError={(e) => {
                            e.currentTarget.src = noImage;
                        }}
                        alt={title}
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
