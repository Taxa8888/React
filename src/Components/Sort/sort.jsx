import React from 'react';
import Button from '../button/button';
import { SortBy } from '../app/app.types';
import './sort.style.scss';

const Sort = ({ movies, sortBy, onSortByChange }) => {
    const handleSortByButtonClick = (sortByValue) => () => {
        onSortByChange(sortByValue);
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
                    onClick={handleSortByButtonClick(SortBy.RELEASEDATE)}
                >
                    release date
                </Button>
                <Button
                    className={`sortButton ${sortBy === SortBy.RATING ? 'activeSortButton' : ''}`}
                    onClick={handleSortByButtonClick(SortBy.RATING)}
                >
                    rating
                </Button>
            </div>
        </div>
    );
};
export default Sort;
