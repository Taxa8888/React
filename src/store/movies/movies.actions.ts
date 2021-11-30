import { Dispatch } from 'react';
import { SearchBy, SortBy } from '../../Components/app/app.types';
import {
    LOAD_MOVIES,
    TOGGLE_SEARCH_OPTION,
    GET_MOVIE_BY_ID,
    MAIN_ENDPOINT,
    IS_LOADING_MOVIES_START,
    IS_LOADING_MOVIES_FINISH,
    IS_LOADING_CHOSEN_MOVIE_START,
    IS_LOADING_CHOSEN_MOVIE_FINISH,
    UPDATE_MOVIE_STORE,
} from './movies.constants';
import {
    Action,
    ChosenMoviesActionPayload,
    InitialState,
    LoadMoviesProps,
    MoviesAction,
    MoviesLoadActionPayload,
    ToggleSearchOptionActionPayload,
    UpdateMoviesStoreParams,
} from './movies.types';

const startMoviesLoading = (): Action => ({ type: IS_LOADING_MOVIES_START });
const finishMoviesLoading = (): Action => ({ type: IS_LOADING_MOVIES_FINISH });
const startChosenMovieLoading = (): Action => ({ type: IS_LOADING_CHOSEN_MOVIE_START });
const finishChosenMovieLoading = (): Action => ({ type: IS_LOADING_CHOSEN_MOVIE_FINISH });

const loadMovies = ({
    sortBy = SortBy.RELEASEDATE,
    search = '',
    searchBy = SearchBy.TITLE,
    offset = 0,
    limit = 8,
}: LoadMoviesProps) => {
    return (dispatch: Dispatch<MoviesAction<MoviesLoadActionPayload> | Action>): Promise<void> => {
        dispatch(startMoviesLoading());
        return fetch(
            `${MAIN_ENDPOINT}?sortBy=${sortBy}&sortOrder=asc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: LOAD_MOVIES, payload: data });
            })
            .then(() => dispatch(finishMoviesLoading()));
    };
};

export const toggleSearchOption = (value: SearchBy) => {
    return (dispatch: Dispatch<MoviesAction<ToggleSearchOptionActionPayload>>): void => {
        dispatch({ type: TOGGLE_SEARCH_OPTION, payload: { value } });
    };
};

export const getMovieById = (id: string) => {
    return (
        dispatch: Dispatch<MoviesAction<ChosenMoviesActionPayload> | Action>
    ): Promise<void> => {
        dispatch(startChosenMovieLoading());
        return fetch(`${MAIN_ENDPOINT}/${id}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MOVIE_BY_ID, payload: data }))
            .then(() => dispatch(finishChosenMovieLoading()));
    };
};

export const updateMoviesStore = (payload: UpdateMoviesStoreParams) => {
    return (
        dispatch: Dispatch<
            | MoviesAction<UpdateMoviesStoreParams>
            | ((
                  dispatch: Dispatch<MoviesAction<MoviesLoadActionPayload> | Action>
              ) => Promise<void>)
        >,
        getState: () => InitialState
    ): void => {
        const { sortBy, searchBy, searchInput, offset } = getState();
        dispatch({ type: UPDATE_MOVIE_STORE, payload });
        dispatch(
            loadMovies({
                sortBy: payload.sortBy || sortBy,
                search: payload.searchInput || searchInput,
                searchBy: payload.searchBy || searchBy,
                offset: payload.offset || offset,
            })
        );
    };
};
