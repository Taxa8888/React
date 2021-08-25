import React, { ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import { Button } from '../button/button';
import './headerdescription.style.scss';
import noImage from '../../img/no_image.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsRoute } from '../../store/movies/movies.reducer';

export const HeaderDescription = (): ReactElement => {
    const chosenMovie = useSelector((store) => store.chosenMovie);
    const dispatch = useDispatch();
    const { title, posterPath, releaseDate, runtime, overview } = chosenMovie;
    const onReturnToMain = () => {
        dispatch(toggleIsRoute());
    };
    return (
        <div className="headerDescription" style={HEADER_BG_IMAGE}>
            <div className="headerDescriptionContainer">
                <div className="navElements">
                    <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                    <Button
                        onClick={onReturnToMain}
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
