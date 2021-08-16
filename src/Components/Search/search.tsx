import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';

export const Search: FC<SearchProps> = ({
    title,
    onSearch,
    searchBy,
    onSearchByChange,
}): ReactElement => {
    const [value, setValue] = useState('');

    const handleSearchByButtonClick = (searchByValue: SearchBy) => (): void => {
        onSearchByChange(searchByValue);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);

    const handleSearchButtonClick = () => onSearch(value);

    return (
        <div className="search">
            <p className="searchTitle">{title}</p>
            <input
                value={value}
                onChange={handleInputChange}
                placeholder="Enter your request here ..."
            />
            <div className="searchOption">
                <p>SEARCH BY</p>
                <Button
                    className={`button ${searchBy === SearchBy.TITLE ? 'active' : ''}`}
                    onClick={handleSearchByButtonClick(SearchBy.TITLE)}
                >
                    Title
                </Button>
                <Button
                    className={`button ${searchBy === SearchBy.GENRE ? 'active' : ''}`}
                    onClick={handleSearchByButtonClick(SearchBy.GENRE)}
                >
                    Genre
                </Button>
                <Button
                    className="button"
                    style={{ marginLeft: '345px' }}
                    onClick={handleSearchButtonClick}
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};
