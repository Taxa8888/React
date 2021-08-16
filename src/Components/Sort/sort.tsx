import React, { FC, ReactElement } from 'react';
import Button from '../button/button';
import { SortBy } from '../app/app.types';
import './sort.style.scss';
import { SortProps } from './sort.types';

const Sort: FC<SortProps> = ({ movies, sortBy, onSortByChange }): ReactElement => {
    const handleSortByButtonClick = (sortByValue: SortBy) => (): void => {
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
