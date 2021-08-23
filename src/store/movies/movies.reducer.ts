import { mapMovies } from '../../data/data.import';

const initialState = {
    movies: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES_DONE':
            return { ...state, movies: mapMovies(action.payload.data) };
        default:
            return state;
    }
};

export const loadMovies = ({ limit, offset }) => {
    return (dispatch) => {
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&offset=${offset}&limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => dispatch({ type: 'LOAD_MOVIES_DONE', payload: data }));
    };
};
