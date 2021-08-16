import React, { FC, ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import Button from '../button/button';
import './headerdescription.style.scss';
import { HeaderDescriptionProps } from './headerdescription.types';
import { DataMovie } from '../../data/data.import';

const HeaderDescription: FC<HeaderDescriptionProps> = ({
    chosenMovie: { title, releaseDate, runtime, overview, posterPath },
    clickSearchButton,
}): ReactElement => {
    const onSearchButton = (value) => (): void => {
        clickSearchButton(value);
    };

    return (
        <div className="headerDescription" style={HEADER_BG_IMAGE}>
            <div className="headerDescriptionContainer">
                <div className="navElements">
                    <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                    <Button
                        onClick={onSearchButton(null)}
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
