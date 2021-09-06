import { SearchBy, SortBy } from '../../Components/app/app.types';
import { mapChosenMovie, mapMovies } from './movies.helper';
import {
    ChosenMovieActionPayload,
    InitialState,
    MoviesAction,
    MoviesLoadActionPayload,
    ResponseDataMovie,
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
} from './movies.constants';

export const initialState: InitialState = {
    movies: [],
    chosenMovie: undefined,
    sortBy: SortBy.RELEASEDATE,
    searchBy: SearchBy.TITLE,
    searchInput: '',
    isRoute: true,
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
                isRoute: true,
            };
        case GET_MOVIE_BY_ID:
            console.log(action.payload);

            return {
                ...state,
                chosenMovie: mapChosenMovie(action.payload),
                isRoute: false,
            };
        default:
            return state;
    }
};
