import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { DataMovie } from '../../store/movies/movies.types';
import './main.style.scss';
import { clickOnSearch, loadMovies, toggleSearchOption } from '../../store/movies/movies.actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsMoviesLoading,
    selectMovies,
    selectSearchBy,
    selectsearchInput,
    selectSortBy,
} from '../../store/movies/movies.selectors';
import { Link, useLocation } from 'react-router-dom';
import { Loading } from '../loading/loading';
import { SearchBy } from '../app/app.types';

export const Main = (): ReactElement => {
    const movies = useSelector(selectMovies);
    const sortBy = useSelector(selectSortBy);
    const searchBy = useSelector(selectSearchBy);
    const isMoviesLoading = useSelector(selectIsMoviesLoading);
    const refSearchBy = useRef(searchBy);
    refSearchBy.current = searchBy;
    const searchInputValue = useSelector(selectsearchInput);
    const dispatch = useDispatch();

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const queryParams = useQuery();

    const applyQueryParams = useCallback(() => {
        if (queryParams.has(SearchBy.TITLE)) {
            dispatch(toggleSearchOption(SearchBy.TITLE));
            dispatch(clickOnSearch(queryParams.get(SearchBy.TITLE)));
        } else if (queryParams.has(SearchBy.GENRE)) {
            dispatch(toggleSearchOption(SearchBy.GENRE));
            dispatch(clickOnSearch(queryParams.get(SearchBy.GENRE)));
        }
    }, [dispatch, queryParams]);

    useEffect(() => {
        applyQueryParams();
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

    if (isMoviesLoading) {
        return <Loading type="bars" color="#000000" />;
    } else {
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
    }
};
