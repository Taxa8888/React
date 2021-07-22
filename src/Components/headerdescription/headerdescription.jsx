import React from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import Button from '../button/button';
import './headerdescription.style.scss';

const HeaderDescription = ({ data, chosenMovie, clickSearchButton }) => {
    const onSearchButton = (value) => () => {
        clickSearchButton(value);
    };
    const correctMovie = data.filter(({ idFilm }) => idFilm === chosenMovie);

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
                        src={correctMovie[0].posterPathFilm}
                        alt="server disconnect"
                    />
                    <div className="aboutFilm">
                        <p className="filmTitle">{correctMovie[0].titleFilm}</p>
                        <span className="filmDate">
                            {correctMovie[0].releaseDateFilm.slice(0, 4)}
                        </span>
                        <span className="filmTime">{`${correctMovie[0].runtimeFilm} min`}</span>
                        <p className="filmOverview">{correctMovie[0].overviewfilm}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDescription;
