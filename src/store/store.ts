import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './movies/movies.reducer';

export const store = createStore(
    moviesReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
