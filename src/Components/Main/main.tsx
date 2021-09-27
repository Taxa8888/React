import React, { ReactElement, useEffect, useRef } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { DataMovie } from '../../store/movies/movies.types';
import './main.style.scss';
import { getMovieById, loadMovies } from '../../store/movies/movies.actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectMovies,
    selectSearchBy,
    selectsearchInput,
    selectSortBy,
} from '../../store/movies/movies.selectors';
import { Link } from 'react-router-dom';

export const Main = (): ReactElement => {
    const movies = useSelector(selectMovies);
    const sortBy = useSelector(selectSortBy);
    const searchBy = useSelector(selectSearchBy);
    const refSearchBy = useRef(searchBy);
    const searchInputValue = useSelector(selectsearchInput);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadMovies({
                sortBy: sortBy,
                search: searchInputValue,
                searchBy: refSearchBy.current,
                offset: 0,
                limit: 8,
            })
        );
    }, [dispatch, sortBy, searchInputValue]);

    const handleChosenMovie = (id: number) => () => {
        dispatch(getMovieById(id));
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
                            <Link key={id} to={`/movie/${id}`}>
                                <MovieCard
                                    onClick={handleChosenMovie(id)}
                                    key={id}
                                    img={posterPath}
                                    title={title}
                                    year={releaseDate.slice(0, 4)}
                                    time={runtime}
                                    genre={genres.join(', ')}
                                />
                            </Link>
                        );
                    })
                )}
            </div>
        </main>
    );
};
