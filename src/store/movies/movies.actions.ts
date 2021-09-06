import { Dispatch } from 'react';
import { SearchBy, SortBy } from '../../Components/app/app.types';
import {
    LOAD_MOVIES,
    TOGGLE_SORT_OPTION,
    TOGGLE_SEARCH_OPTION,
    CLICK_ON_SEARCH,
    GET_MOVIE_BY_ID,
    MAIN_ENDPOINT,
} from './movies.constants';
import {
    ChosenMoviesActionPayload,
    DataMovie,
    LoadMoviesProps,
    MoviesAction,
    MoviesLoadActionPayload,
    ToggleClickOnSearchOptionActionPayload,
    ToggleSearchOptionActionPayload,
    ToggleSortOptionActionPayload,
} from './movies.types';

export const loadMovies = ({
    sortBy = SortBy.RELEASEDATE,
    search = '',
    searchBy = SearchBy.TITLE,
    offset = 0,
    limit = 8,
}: LoadMoviesProps) => {
    return (dispatch: Dispatch<MoviesAction<MoviesLoadActionPayload>>): Promise<void> => {
        return fetch(
            `${MAIN_ENDPOINT}?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: LOAD_MOVIES, payload: data });
            });
    };
};

export const toggleSortOption = (value: SortBy) => {
    return (dispatch: Dispatch<MoviesAction<ToggleSortOptionActionPayload>>): void => {
        dispatch({ type: TOGGLE_SORT_OPTION, payload: { value } });
    };
};

export const toggleSearchOption = (value: SearchBy) => {
    return (dispatch: Dispatch<MoviesAction<ToggleSearchOptionActionPayload>>): void => {
        dispatch({ type: TOGGLE_SEARCH_OPTION, payload: { value } });
    };
};

export const clickOnSearch = (value: string) => {
    return (dispatch: Dispatch<MoviesAction<ToggleClickOnSearchOptionActionPayload>>): void => {
        dispatch({ type: CLICK_ON_SEARCH, payload: { value } });
    };
};

export const getMovieById = ({ id }: DataMovie) => {
    return (dispatch: Dispatch<MoviesAction<ChosenMoviesActionPayload>>): Promise<void> => {
        return fetch(`${MAIN_ENDPOINT}/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MOVIE_BY_ID, payload: data }));
    };
};
