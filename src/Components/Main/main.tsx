import React, { FC, ReactElement, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { MainProps } from './main.types';
import { DataMovie } from '../../data/data.types';
import './main.style.scss';
import { loadMovies } from '../../store/movies/movies.reducer';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../../img/no_image.png';

export const Main: FC<MainProps> = ({ clickChosenMovie }): ReactElement => {
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    console.log(movies);

    const handleChosenMovie = (value: DataMovie) => (): void => {
        clickChosenMovie(value);
    };

    useEffect(() => {
        dispatch(loadMovies({ limit: 16, offset: 0 }));
    }, [dispatch]);

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
