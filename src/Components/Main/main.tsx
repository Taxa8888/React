import React, { ReactElement, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { DataMovie } from '../../store/movies/movies.types';
import './main.style.scss';
import { getMovieById, loadMovies } from '../../store/movies/movies.actions';
import { useDispatch, useSelector } from 'react-redux';

export const Main = (): ReactElement => {
    const sortBy = useSelector((store) => store.sortBy);
    const searchBy = useSelector((store) => store.searchBy);
    const searchInputValue = useSelector((store) => store.searchInput);
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadMovies({
                sortBy: sortBy,
                search: searchInputValue,
                searchBy: searchBy,
            })
        );
    }, [sortBy, searchInputValue]);

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
