import React, { ReactElement, useEffect, useRef } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { DataMovie } from '../../store/movies/movies.types';
import './main.style.scss';
import { updateMoviesStore } from '../../store/movies/movies.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsMoviesLoading, selectMovies } from '../../store/movies/movies.selectors';
import { Link } from 'react-router-dom';
import { Loading } from '../loading/loading';
import { parseUrlParams, useQuery } from '../app/app.helpers';

export const Main = (): ReactElement => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const isMoviesLoading = useSelector(selectIsMoviesLoading);
    const queryParams = useQuery();
    const queryParamsRef = useRef(queryParams);

    useEffect(() => {
        const objectQueryParams = parseUrlParams(queryParamsRef);
        dispatch(updateMoviesStore(objectQueryParams));
    }, [dispatch]);

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
