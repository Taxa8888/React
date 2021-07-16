import React, { useState } from 'react';
import Button from '../button/button';
import './search.style.scss';
import { SEARCH_BY } from '../app/app.constants';

const Search = ({ title, onSearch, searchBy, onSearchByChange }) => {
    const [value, setValue] = useState('');

    const handleSearchByButtonClick = (searchByValue) => () => {
        onSearchByChange(searchByValue);
    };

    const handleInputChange = (event) => setValue(event.target.value);

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
                    className={`button ${searchBy === SEARCH_BY.TITLE ? 'active' : ''}`}
                    onClick={handleSearchByButtonClick(SEARCH_BY.TITLE)}
                >
                    Title
                </Button>
                <Button
                    className={`button ${searchBy === SEARCH_BY.GENRE ? 'active' : ''}`}
                    onClick={handleSearchByButtonClick(SEARCH_BY.GENRE)}
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

export default Search;
