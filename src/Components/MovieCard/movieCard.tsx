import React, { FC, ReactElement } from 'react';
import { MovieCardProps } from './movieCard.types';
import './movieCard.style.scss';

export const MovieCard: FC<MovieCardProps> = ({
    img,
    title,
    year,
    time,
    genre,
    onClick,
}): ReactElement => (
    <div className="movie" onClick={onClick}>
        <div>
            <img src={img} alt="Error" className="movieImg" />
        </div>
        <div className="movieTextContent">
            <h1>{title}</h1>
            <ul className="movieGen">
                <li>Release: {year}</li>
                <li>Duration: {time} min</li>
                <li>Genres: {genre}</li>
            </ul>
        </div>
    </div>
);
