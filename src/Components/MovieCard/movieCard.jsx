import React from 'react';
import './movieCard.style.scss';

const MovieCard = ({ img, title, year, time, genre, onClick }) => (
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

export default MovieCard;
