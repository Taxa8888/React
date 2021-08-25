import React, { FC, ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import { Button } from '../button/button';
import { HeaderDescriptionProps } from './headerdescription.types';
import './headerdescription.style.scss';
import noImage from '../../img/no_image.png';
import { useSelector } from 'react-redux';

export const HeaderDescription: FC<HeaderDescriptionProps> = (chosenMovie): ReactElement => {
    console.log(chosenMovie);

    return (
        <div className="headerDescription" style={HEADER_BG_IMAGE}>
            <div className="headerDescriptionContainer">
                <div className="navElements">
                    <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                    <Button
                        onClick={() => console.log('fine')}
                        className="button"
                        style={{ marginLeft: '40rem' }}
                    >
                        SEARCH
                    </Button>
                </div>
                <div className="fimlDescription">
                    <img
                        className="descriptionMovieImg"
                        src={chosenMovie.posterPath}
                        onError={(e) => {
                            e.target.src = noImage;
                        }}
                        alt={chosenMovie.title}
                    />
                    <div className="aboutFilm">
                        <p className="filmTitle">{chosenMovie.title}</p>
                        <span className="filmDate">{chosenMovie.releaseDate.slice(0, 4)}</span>
                        <span className="filmTime">{`${chosenMovie.runtime} min`}</span>
                        <p className="filmOverview">{chosenMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
