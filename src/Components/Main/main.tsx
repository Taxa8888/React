import React, { FC, ReactElement, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { MainProps } from './main.types';
import { DataMovie } from '../../data/data.types';
import './main.style.scss';
import { getMovieById, loadMovies } from '../../store/movies/movies.reducer';
import { useDispatch, useSelector } from 'react-redux';

export const Main: FC<MainProps> = (): ReactElement => {
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies({ offset: 0 }));
    }, [dispatch]);

    const handleChosenMovie = (value: DataMovie) => (): void => {
        dispatch(getMovieById({ id: value.id }));
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
                                altTitle={title}
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
