import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    GET_MOVIE_BY_ID,
    IS_LOADING_CHOSEN_MOVIE_FINISH,
    IS_LOADING_CHOSEN_MOVIE_START,
    IS_LOADING_MOVIES_FINISH,
    IS_LOADING_MOVIES_START,
    LOAD_MOVIES,
    TOGGLE_SEARCH_OPTION,
    UPDATE_MOVIE_STORE,
} from '../movies.constants';
import { getMovieById, loadMovies, toggleSearchOption, updateMoviesStore } from '../movies.actions';
import expect from 'expect';
import { AnyAction } from 'redux';
import { enableFetchMocks, FetchMock } from 'jest-fetch-mock';
import { SearchBy } from '../../../components/app/app.types';
enableFetchMocks();

const mockFetch = fetch as unknown as FetchMock;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test all actions', () => {
    describe('Test loadMovies action', () => {
        afterEach(() => {
            mockFetch.resetMocks();
        });
        it('get movies data success', () => {
            mockFetch.mockResponseOnce(JSON.stringify([1, 2, 3]));
            const expectedActions = [
                {
                    type: IS_LOADING_MOVIES_START,
                },
                {
                    type: LOAD_MOVIES,
                    payload: [1, 2, 3],
                },
                {
                    type: IS_LOADING_MOVIES_FINISH,
                },
            ];
            const store = mockStore({});
            return store.dispatch(loadMovies({}) as unknown as AnyAction).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
    describe('Test toggleSearchOption action', () => {
        it('toggle success', () => {
            const expectedActions = [
                {
                    type: TOGGLE_SEARCH_OPTION,
                    payload: { value: SearchBy.TITLE },
                },
            ];
            const store = mockStore({});
            store.dispatch(toggleSearchOption(SearchBy.TITLE) as unknown as AnyAction);
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    describe('Test getMovieById action', () => {
        it('get movie by ID success', () => {
            mockFetch.mockResponseOnce(JSON.stringify([1, 2, 3]));
            const expectedActions = [
                {
                    type: IS_LOADING_CHOSEN_MOVIE_START,
                },
                {
                    type: GET_MOVIE_BY_ID,
                    payload: [1, 2, 3],
                },
                {
                    type: IS_LOADING_CHOSEN_MOVIE_FINISH,
                },
            ];
            const store = mockStore({});
            return store.dispatch(getMovieById('') as unknown as AnyAction).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
    describe('Test updateMoviesStore action', () => {
        it('update movies store success', () => {
            const expectedActions = [
                {
                    type: UPDATE_MOVIE_STORE,
                    payload: {},
                },
                {
                    type: IS_LOADING_MOVIES_START,
                },
            ];
            const store = mockStore({});
            store.dispatch(updateMoviesStore({}) as unknown as AnyAction);
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
