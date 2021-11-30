import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initialState, moviesReducer } from './movies/movies.reducer';

export const store = createStore(
    moviesReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

//   export const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));
