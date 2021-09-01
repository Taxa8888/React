import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from './movies.helper';
import { initialStateField } from './movies.types';
import {
    LOAD_MOVIES,
    TOGGLE_SORT_OPRION,
    TOGGLE_SEARCH_OPRION,
    CLICK_ON_SEARCH,
    GET_MOVIE_BY_ID,
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
        case LOAD_MOVIES:
            return { ...state, movies: mapMovies(action.payload.data) };
        case TOGGLE_SORT_OPRION:
            return { ...state, sortBy: action.payload.value };
        case TOGGLE_SEARCH_OPRION:
            return { ...state, searchBy: action.payload.value };
        case CLICK_ON_SEARCH:
            return { ...state, searchInput: action.payload.value, isRoute: true };
        case GET_MOVIE_BY_ID:
            return { ...state, chosenMovie: mapChosenMovie(action.payload), isRoute: false };
        default:
            return state;
    }
};
