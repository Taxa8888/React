import React, { FC, ReactElement } from 'react';
import { MovieCardProps } from './moviecard.types';
import './moviecard.style.scss';
import { MovieImage } from '../movieimage/movieimage';

export const MovieCard: FC<MovieCardProps> = ({ img, title, year, time, genre }): ReactElement => (
    <div className="movie">
        <div>
            <MovieImage title={title} posterPath={img} className="movieImg" />
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
