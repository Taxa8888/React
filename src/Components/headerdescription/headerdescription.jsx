import React from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import Button from '../button/button';
import './headerdescription.style.scss';

const HeaderDescription = ({
    chosenMovie: { title, releaseDate, runtime, overview, posterPath },
    clickSearchButton,
}) => {
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
                    <img className="descriptionMovieImg" src={posterPath} alt="server disconnect" />
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

export default HeaderDescription;
