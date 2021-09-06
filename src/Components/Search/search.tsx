import React, { FC, ReactElement, useCallback, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clickOnSearch, toggleSearchOption } from '../../store/movies/movies.actions';
import { selectSearchBy } from '../../store/movies/movies.selectors';

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const [inputSearch, setInputSearch] = useState('');
    const searchBy = useSelector(selectSearchBy);
    const dispatch = useDispatch();

    console.log(inputSearch);

    const handleInputChange = useCallback((event) => setInputSearch(event.target.value), []);

    const toggleSearchBy = (searchBy: SearchBy) => () => {
        dispatch(toggleSearchOption(searchBy));
    };

    const onSearchByButton = useCallback(() => {
        setInputSearch('');
        dispatch(clickOnSearch(inputSearch));
    }, [inputSearch, dispatch]);

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
