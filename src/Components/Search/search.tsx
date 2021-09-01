import React, { FC, ReactElement, useCallback, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clickOnSearch, toggleSearchOption } from '../../store/movies/movies.actions';

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const [inputSearch, setInputSearch] = useState('');
    const searchBy = useSelector((store) => store.searchBy);
    const dispatch = useDispatch();

    console.log(inputSearch);

    const handleInputChange = (event) => setInputSearch(event.target.value);

    const toggleSearchBy = (searchBy: SearchBy) =>
        useCallback(() => {
            dispatch(toggleSearchOption(searchBy));
        }, [searchBy]);

    const onSearchByButton = () => {
        setInputSearch('');
        dispatch(clickOnSearch(inputSearch));
    };

    return (
        <div className="search">
            <p className="searchTitle">{title}</p>
            <input
                value={inputSearch}
                onChange={handleInputChange}
                placeholder="Enter your request here ..."
            />
            <div className="searchOption">
                <p>SEARCH BY</p>
                <Button
                    className={`button ${searchBy === SearchBy.TITLE ? 'active' : ''}`}
                    onClick={toggleSearchBy(SearchBy.TITLE)}
                >
                    Title
                </Button>
                <Button
                    className={`button ${searchBy === SearchBy.GENRE ? 'active' : ''}`}
                    onClick={toggleSearchBy(SearchBy.GENRE)}
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
