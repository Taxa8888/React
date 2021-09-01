import { SearchBy, SortBy } from '../../Components/app/app.types';
import {
    LOAD_MOVIES,
    TOGGLE_SORT_OPRION,
    TOGGLE_SEARCH_OPRION,
    CLICK_ON_SEARCH,
    GET_MOVIE_BY_ID,
} from './movies.constants';

export const loadMovies = ({
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
            .then((data) => dispatch({ type: LOAD_MOVIES, payload: data }));
    };
};

export const toggleSortOption = (value) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SORT_OPRION, payload: { value } });
    };
};

export const toggleSearchOption = (value) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SEARCH_OPRION, payload: { value } });
    };
};

export const clickOnSearch = (value) => {
    return (dispatch) => {
        dispatch({ type: CLICK_ON_SEARCH, payload: { value } });
    };
};

export const getMovieById = ({ id }) => {
    return (dispatch) => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MOVIE_BY_ID, payload: data }));
    };
};
