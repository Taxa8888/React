import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeSearchInput,
    searchMovies,
    toggleSearchOption,
} from '../../store/movies/movies.actions';

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const searchBy = useSelector((store) => store.searchBy);
    const sortBy = useSelector((store) => store.sortBy);
    const searchInputValue = useSelector((store) => store.searchInput);
    const dispatch = useDispatch();

    console.log(searchBy);

    const onSearchByButton = () => {
        dispatch(searchMovies({ sortBy: sortBy, searchBy: searchBy, search: searchInputValue }));
    };

    const handleSearchByButtonClick = (searchBy: SearchBy) => (): void => {
        dispatch(toggleSearchOption(searchBy));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(changeSearchInput(event.target.value));

    return (
        <div className="search">
            <p className="searchTitle">{title}</p>
            <input
                value={searchInputValue}
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
                    onClick={onSearchByButton}
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};
