import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from '../../data/data.import';
import { initialStateField } from '../store.types';
import {
    CHANGE_SEACH_INPUT,
    GET_MOVIE_BY_ID,
    LOADING_MOVIES,
    SEARCH_MOVIES,
    SORT_MOVIES_BY_RATING,
    SORT_MOVIES_BY_RELEASE_DATE,
    TOGGLE_SEARCH_OPRION,
} from './movies.constants';

export const initialState: initialStateField = {
    movies: [],
    chosenMovie: {},
    sortBy: SortBy.RELEASEDATE,
    searchBy: SearchBy.TITLE,
    searchInput: '',
    isRoute: true,
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_MOVIES:
            return { ...state, movies: mapMovies(action.payload.data) };
        case SORT_MOVIES_BY_RELEASE_DATE:
            return { ...state, movies: mapMovies(action.payload.data), sortBy: SortBy.RELEASEDATE };
        case SORT_MOVIES_BY_RATING:
            return { ...state, movies: mapMovies(action.payload.data), sortBy: SortBy.RATING };
        case TOGGLE_SEARCH_OPRION:
            return { ...state, searchBy: action.payload.value };
        case SEARCH_MOVIES:
            return { ...state, movies: mapMovies(action.payload.data), searchInput: '' };
        case GET_MOVIE_BY_ID:
            return { ...state, chosenMovie: mapChosenMovie(action.payload), isRoute: false };
        case CHANGE_SEACH_INPUT:
            return { ...state, searchInput: action.payload.value };
        default:
            return state;
    }
};
