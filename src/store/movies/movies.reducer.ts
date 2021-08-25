import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from '../../data/data.import';
import { initialStateField } from '../store.types';

export const initialState: initialStateField = {
    movies: [],
    chosenMovie: undefined,
    searchBy: SearchBy.TITLE,
    sortBy: SortBy.RELEASEDATE,
    isRoute: true,
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES_DONE':
            return { ...state, movies: mapMovies(action.payload.data), sortBy: SortBy.RELEASEDATE };
        case 'SORT_BY_RATING':
            return { ...state, movies: mapMovies(action.payload.data), sortBy: SortBy.RATING };
        case 'SORT_BY_RELEASE_DATE':
            return { ...state, movies: mapMovies(action.payload.data), sortBy: SortBy.RELEASEDATE };
        case 'SEARCH_MOVIES':
            return { ...state, movies: mapMovies(action.payload.data) };
        case 'TOGGLE_SEARCH_BY_OPTION':
            return { ...state, searchBy: action.payload.value };
        case 'GET_MOVIE_BY_ID':
            return { ...state, chosenMovie: mapChosenMovie(action.payload), isRoute: false };
        case 'RETURN_IS_ROUTE':
            return { ...state, isRoute: true };
        default:
            return state;
    }
};

export const loadMovies = ({ offset }) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?offset=${offset}&limit=8&sortBy=release_date&sortOrder=asc`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'LOAD_MOVIES_DONE', payload: data }));
    };
};

export const sortByRating = ({ offset }) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&offset=${offset}&limit=8`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'SORT_BY_RATING', payload: data }));
    };
};

export const sortByReleaseDate = ({ offset }) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?offset=${offset}&limit=8&sortBy=release_date&sortOrder=asc`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'SORT_BY_RELEASE_DATE', payload: data }));
    };
};

export const searchMovies = ({ offset = 0, searchOption = 'title', searchValue }) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&search=${searchValue}&searchBy=${searchOption}&offset=${offset}&limit=8`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'SEARCH_MOVIES', payload: data }));
    };
};

export const toggleSearchByOption = (value) => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_SEARCH_BY_OPTION', payload: { value } });
    };
};

export const getMovieById = ({ id }) => {
    return (dispatch) => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'GET_MOVIE_BY_ID', payload: data }));
    };
};

export const toggleIsRoute = () => {
    return (dispatch) => {
        dispatch({ type: 'RETURN_IS_ROUTE' });
    };
};
