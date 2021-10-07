import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { DataMovie } from '../../store/movies/movies.types';
import './main.style.scss';
import { clickOnSetOffset, loadMovies } from '../../store/movies/movies.actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsMoviesLoading,
    selectMovies,
    selectOffset,
    selectSearchBy,
    selectsearchInput,
    selectSortBy,
    selectTotal,
} from '../../store/movies/movies.selectors';
import { Link } from 'react-router-dom';
import { Loading } from '../loading/loading';

export const Main = (): ReactElement => {
    const [paginationValue, setPaginationsValue] = useState(0);
    const movies = useSelector(selectMovies);
    const total = useSelector(selectTotal);
    const offset = useSelector(selectOffset);
    const sortBy = useSelector(selectSortBy);
    const searchBy = useSelector(selectSearchBy);
    const isMoviesLoading = useSelector(selectIsMoviesLoading);
    const refSearchBy = useRef(searchBy);
    refSearchBy.current = searchBy;
    const searchInputValue = useSelector(selectsearchInput);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadMovies({
                sortBy: sortBy,
                search: searchInputValue,
                searchBy: refSearchBy.current,
                offset: offset,
                limit: 8,
            })
        );
    }, [dispatch, sortBy, searchInputValue, offset]);

    const onClickOffsetMinus = () => {
        total;
        setPaginationsValue(paginationValue - 1);
        dispatch(clickOnSetOffset(paginationValue * 8));
    };

    const onClickOffsetPlus = () => {
        total;
        setPaginationsValue(paginationValue + 1);
        dispatch(clickOnSetOffset(paginationValue * 8));
    };

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
                <div className="paginationContainer">
                    <button
                        onClick={onClickOffsetMinus}
                        className="paginationButton paginationButtonMinus"
                    ></button>
                    <input className="paginationInput" type="text" value={paginationValue} />
                    <button
                        onClick={onClickOffsetPlus}
                        className="paginationButton paginationButtonPlus"
                    ></button>
                </div>
            </main>
        );
    }
};
