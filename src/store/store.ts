import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { moviesReducer } from './movies/movies.reducer';

export const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));
