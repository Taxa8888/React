import React, { FC, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clickOnSearch, toggleSearchOption } from '../../store/movies/movies.actions';
import { selectSearchBy } from '../../store/movies/movies.selectors';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const searchBy = useSelector(selectSearchBy);
    const [inputSearch, setInputSearch] = useState('');
    const queryParams = useQuery();
    const queryParamsRef = useRef(queryParams);
    queryParamsRef.current = queryParams;
    const dispatch = useDispatch();

    useEffect(() => {
        if (queryParamsRef.current.has(SearchBy.TITLE)) {
            dispatch(toggleSearchOption(SearchBy.TITLE));
            dispatch(clickOnSearch(queryParamsRef.current.get(SearchBy.TITLE)));
        } else if (queryParamsRef.current.has(SearchBy.GENRE)) {
            dispatch(toggleSearchOption(SearchBy.GENRE));
            dispatch(clickOnSearch(queryParamsRef.current.get(SearchBy.GENRE)));
        }
    }, [dispatch]);

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
                <Link to={`/search/Search?${searchBy}=${inputSearch}`}>
                    <Button
                        className="button"
                        style={{ marginLeft: '345px' }}
                        onClick={onSearchByButton}
                    >
                        SEARCH
                    </Button>
                </Link>
            </div>
        </div>
    );
};
