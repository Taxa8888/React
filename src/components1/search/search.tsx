import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchOption, updateMoviesStore } from '../../store/movies/movies.actions';
import { selectSearchBy, selectsearchInput } from '../../store/movies/movies.selectors';
import { Link } from 'react-router-dom';

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const searchBy = useSelector(selectSearchBy);
    const searchInput = useSelector(selectsearchInput);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setSearch(searchInput);
    }, [searchInput]);

    const handleInputChange = useCallback((event) => setSearch(event.target.value), []);

    const toggleSearchBy = (searchBy: SearchBy) => () => {
        dispatch(toggleSearchOption(searchBy));
    };

    const handleSearchByButton = useCallback(() => {
        dispatch(
            updateMoviesStore({
                searchInput: search,
            })
        );
    }, [dispatch, search]);

    return (
        <div className="search">
            <p className="searchTitle">{title}</p>
            <input
                value={search}
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
                <Link to={`/search/Search?${searchBy}=${search}`}>
                    <Button
                        className="button"
                        style={{ marginLeft: '345px' }}
                        onClick={handleSearchByButton}
                    >
                        SEARCH
                    </Button>
                </Link>
            </div>
        </div>
    );
};
