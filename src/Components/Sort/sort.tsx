import React, { ReactElement } from 'react';
import { Button } from '../button/button';
import { SortBy } from '../app1/app.types';
import './sort.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateMoviesStore } from '../../store/movies/movies.actions';
import { selectMovies, selectSortBy } from '../../store/movies/movies.selectors';

export const Sort = (): ReactElement => {
    const sortBy = useSelector(selectSortBy);
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    const toggleSortBy = (sortBy: SortBy) => () => {
        dispatch(
            updateMoviesStore({
                sortBy,
            })
        );
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
