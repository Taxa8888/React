import React, { ReactElement } from 'react';
import { Button } from '../button/button';
import { SortBy } from '../app/app.types';
import './sort.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sortMoviesByRating, sortMoviesByReleaseDate } from '../../store/movies/movies.actions';

export const Sort = (): ReactElement => {
    const sortBy = useSelector((store) => store.sortBy);
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    const handleSortByReleaseDate = () => {
        dispatch(sortMoviesByReleaseDate({ offset: 0 }));
    };

    const handleSortByRating = () => {
        dispatch(sortMoviesByRating({ offset: 0 }));
    };

    return (
        <div className="sortContainer">
            <div className="sortCount">{movies.length} movies found</div>
            <div className="sortBy">
                Sort by
                <Button
                    className={`sortButton ${
                        sortBy === SortBy.RELEASEDATE ? 'activeSortButton' : ''
                    }`}
                    onClick={handleSortByReleaseDate}
                >
                    release date
                </Button>
                <Button
                    className={`sortButton ${sortBy === SortBy.RATING ? 'activeSortButton' : ''}`}
                    onClick={handleSortByRating}
                >
                    rating
                </Button>
            </div>
        </div>
    );
};
