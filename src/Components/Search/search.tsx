import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Button } from '../button/button';
import { SearchBy } from '../app/app.types';
import { SearchProps } from './search.types';
import './search.style.scss';
import { searchMovies, toggleSearchByOption } from '../../store/movies/movies.reducer';
import { useDispatch, useSelector } from 'react-redux';

export const Search: FC<SearchProps> = ({ title }): ReactElement => {
    const dispatch = useDispatch();
    const searchBy = useSelector((store) => store.searchBy);
    const [value, setValue] = useState('');

    const onSearchByButton = () => {
        dispatch(searchMovies({ offset: 0, searchOption: searchBy, searchValue: value }));
    };

    const handleSearchByButtonClick = (searchByValue: SearchBy) => (): void => {
        dispatch(toggleSearchByOption(searchByValue));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);

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
                    onClick={onSearchByButton}
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};
