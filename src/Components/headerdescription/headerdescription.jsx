import React from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import Button from '../button/button';
import './headerdescription.style.scss';

const HeaderDescription = ({ chosenMovie, clickSearchButton }) => {
    const onSearchButton = (value) => () => {
        clickSearchButton(value);
    };

    return (
        <div className="headerDescription">
            <div className="headerDescriptionContainer">
                <div className="navElements">
                    <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                    <Button
                        onClick={onSearchButton('')}
                        className="button"
                        style={{ marginLeft: '40rem' }}
                    >
                        SEARCH
                    </Button>
                </div>
                <div className="fimlDescription">
                    <img
                        className="descriptionMovieImg"
                        src={chosenMovie.posterPathFilm}
                        alt="server disconnect"
                    />
                    <div className="aboutFilm">
                        <p className="filmTitle">{chosenMovie.titleFilm}</p>
                        <span className="filmDate">{chosenMovie.releaseDateFilm.slice(0, 4)}</span>
                        <span className="filmTime">{`${chosenMovie.runtimeFilm} min`}</span>
                        <p className="filmOverview">{chosenMovie.overviewfilm}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDescription;
