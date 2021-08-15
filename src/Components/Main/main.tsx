import React, { FC, ReactElement } from 'react';
import MovieCard from '../movieCard/movieCard';
import './main.style.scss';
import { MainProps } from './main.types';
import { DataMoviesTypes } from '../../data/data.import';

const Main: FC<MainProps> = ({ movies, clickChosenMovie }): ReactElement => {
    const handleChosenMovie = (value: DataMoviesTypes) => () => {
        clickChosenMovie(value);
    };
    return (
        <main className="main">
            <div className="mainContainer">
                {movies.length === 0 ? (
                    <div className="notFound">No films found</div>
                ) : (
                    movies.map((movie: DataMoviesTypes) => {
                        const { id, posterPath, title, releaseDate, runtime, genres } = movie;
                        return (
                            <MovieCard
                                onClick={handleChosenMovie(movie)}
                                key={id}
                                img={posterPath}
                                title={title}
                                year={releaseDate.slice(0, 4)}
                                time={runtime}
                                genre={genres.join(', ')}
                            />
                        );
                    })
                )}
            </div>
        </main>
    );
};

export default Main;
