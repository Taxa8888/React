import React, { ReactElement, useCallback, useEffect } from 'react';
import { Button } from '../button/button';
import { SortBy } from '../app/app.types';
import './sort.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSortOption } from '../../store/movies/movies.actions';

export const Sort = (): ReactElement => {
    const sortBy = useSelector((store) => store.sortBy);
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    const toggleSortBy = (sortBy: SortBy) =>
        useCallback(() => {
            dispatch(toggleSortOption(sortBy));
        }, [sortBy]);

    return (
        <div className="sortContainer">
            <div className="sortCount">{movies.length} movies found</div>
            <div className="sortBy">
                Sort by
                <Button
                    className={`sortButton ${
                        sortBy === SortBy.RELEASEDATE ? 'activeSortButton' : ''
                    }`}
                    onClick={toggleSortBy(SortBy.RELEASEDATE)}
                >
                    release date
                </Button>
                <Button
                    className={`sortButton ${sortBy === SortBy.RATING ? 'activeSortButton' : ''}`}
                    onClick={toggleSortBy(SortBy.RATING)}
                >
                    rating
                </Button>
            </div>
        </div>
    );
};
