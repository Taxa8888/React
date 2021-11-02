import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from './movies.helper';
import {
    ChosenMoviesActionPayload,
    ClickOnSetOffset,
    InitialState,
    MoviesAction,
    MoviesLoadActionPayload,
    ToggleSearchOptionActionPayload,
} from './movies.types';
import {
    LOAD_MOVIES,
    TOGGLE_SEARCH_OPTION,
    GET_MOVIE_BY_ID,
    IS_LOADING_MOVIES_START,
    IS_LOADING_MOVIES_FINISH,
    IS_LOADING_CHOSEN_MOVIE_START,
    IS_LOADING_CHOSEN_MOVIE_FINISH,
    SET_OFFSET,
    UPDATE_MOVIE_STORE,
} from './movies.constants';

export const initialState: InitialState = {
    movies: [],
    total: 0,
    offset: 0,
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
                total: (action.payload as MoviesLoadActionPayload).total,
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: (action.payload as ClickOnSetOffset).value,
            };
        case TOGGLE_SEARCH_OPTION:
            return {
                ...state,
                searchBy: (action.payload as ToggleSearchOptionActionPayload).value,
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
        case UPDATE_MOVIE_STORE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
