import React, { FC, ReactElement } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { MainProps } from './main.types';
import { DataMovie } from '../../data/data.types';
import './main.style.scss';

export const Main: FC<MainProps> = ({ movies, clickChosenMovie }): ReactElement => {
    const handleChosenMovie = (value: DataMovie) => (): void => {
        clickChosenMovie(value);
    };

    return (
        <main className="main">
            <div className="mainContainer">
                {movies.length === 0 ? (
                    <div className="notFound">No films found</div>
                ) : (
                    movies.map((movie: DataMovie) => {
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
