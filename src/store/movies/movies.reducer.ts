import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from './movies.helper';
import {
    ChosenMoviesActionPayload,
    InitialState,
    MoviesAction,
    MoviesLoadActionPayload,
    ToggleClickOnSearchOptionActionPayload,
    ToggleSearchOptionActionPayload,
    ToggleSortOptionActionPayload,
} from './movies.types';
import {
    LOAD_MOVIES,
    TOGGLE_SORT_OPTION,
    TOGGLE_SEARCH_OPTION,
    CLICK_ON_SEARCH,
    GET_MOVIE_BY_ID,
    IS_LOADING_MOVIES_START,
    IS_LOADING_MOVIES_FINISH,
    IS_LOADING_CHOSEN_MOVIE_START,
    IS_LOADING_CHOSEN_MOVIE_FINISH,
} from './movies.constants';

export const initialState: InitialState = {
    movies: [],
    chosenMovie: undefined,
    sortBy: SortBy.RELEASEDATE,
    searchBy: SearchBy.TITLE,
    searchInput: '',
    isMoviesLoading: true,
    isChosenMovieLoadin: true,
};

export const moviesReducer = (state = initialState, action: MoviesAction): InitialState => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                movies: mapMovies((action.payload as MoviesLoadActionPayload).data),
            };
        case TOGGLE_SORT_OPTION:
            return { ...state, sortBy: (action.payload as ToggleSortOptionActionPayload).value };
        case TOGGLE_SEARCH_OPTION:
            return {
                ...state,
                searchBy: (action.payload as ToggleSearchOptionActionPayload).value,
            };
        case CLICK_ON_SEARCH:
            return {
                ...state,
                searchInput: (action.payload as ToggleClickOnSearchOptionActionPayload).value,
            };
        case GET_MOVIE_BY_ID:
            return {
                ...state,
                chosenMovie: mapChosenMovie(action.payload as ChosenMoviesActionPayload),
            };
        case IS_LOADING_MOVIES_START:
            return {
                ...state,
                isMoviesLoading: true,
            };
        case IS_LOADING_MOVIES_FINISH:
            return {
                ...state,
                isMoviesLoading: false,
            };
        case IS_LOADING_CHOSEN_MOVIE_START:
            return {
                ...state,
                isChosenMovieLoadin: true,
            };
        case IS_LOADING_CHOSEN_MOVIE_FINISH:
            return {
                ...state,
                isChosenMovieLoadin: false,
            };
        default:
            return state;
    }
};
