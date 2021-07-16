import React from 'react';
import Button from '../button/button';
import { SORT_BY } from '../app/app.constants';
import './sort.style.scss';

const Sort = ({ data, sortBy, onSortByChange }) => {
    const handleSortByButtonClick = (sortByValue) => () => {
        onSortByChange(sortByValue);
    };

    return (
        <div className="sortContainer">
            <div className="sortCount">{data.length} movies found</div>
            <div className="sortBy">
                Sort by
                <Button
                    className={`sortButton ${
                        sortBy === SORT_BY.RELEASEDATE ? 'activeSortButton' : ''
                    }`}
                    onClick={handleSortByButtonClick(SORT_BY.RELEASEDATE)}
                >
                    release date
                </Button>
                <Button
                    className={`sortButton ${sortBy === SORT_BY.RATING ? 'activeSortButton' : ''}`}
                    onClick={handleSortByButtonClick(SORT_BY.RATING)}
                >
                    rating
                </Button>
            </div>
        </div>
    );
};
export default Sort;
