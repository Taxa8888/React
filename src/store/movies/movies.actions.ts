import { SearchBy, SortBy } from '../../Components/app/app.types';
import {
    CHANGE_SEACH_INPUT,
    GET_MOVIE_BY_ID,
    LOADING_MOVIES,
    SEARCH_MOVIES,
    SORT_MOVIES_BY_RATING,
    SORT_MOVIES_BY_RELEASE_DATE,
    TOGGLE_SEARCH_OPRION,
} from './movies.constants';

export const loadingMovies = ({
    sortBy = SortBy.RELEASEDATE,
    search = '',
    searchBy = SearchBy.TITLE,
    offset = 0,
    limit = 8,
}) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: LOADING_MOVIES, payload: data }));
    };
};

export const sortMoviesByReleaseDate = ({
    sortBy = SortBy.RELEASEDATE,
    search = '',
    searchBy = SearchBy,
    offset = 0,
    limit = 8,
}) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: SORT_MOVIES_BY_RELEASE_DATE, payload: data }));
    };
};

export const sortMoviesByRating = ({
    sortBy = SortBy.RATING,
    search = '',
    searchBy = SearchBy,
    offset = 0,
    limit = 8,
}) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: SORT_MOVIES_BY_RATING, payload: data }));
    };
};

export const toggleSearchOption = (value) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SEARCH_OPRION, payload: { value } });
    };
};

export const searchMovies = ({
    sortBy = SortBy,
    search = '',
    searchBy = SearchBy,
    offset = 0,
    limit = 8,
}) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: SEARCH_MOVIES, payload: data }));
    };
};

export const getMovieById = ({ id }) => {
    return (dispatch) => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MOVIE_BY_ID, payload: data }));
    };
};

export const changeSearchInput = (value) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_SEACH_INPUT, payload: { value } });
    };
};
