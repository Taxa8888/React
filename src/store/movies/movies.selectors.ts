import { SearchBy, SortBy } from '../../Components/app/app.types';
import { ChosenDataMovie, DataMovie, InitialState } from './movies.types';

export const selectMovies = (store: InitialState): DataMovie[] => store.movies;
export const selectChosenMovie = (store: InitialState): ChosenDataMovie => store.chosenMovie;
export const selectSortBy = (store: InitialState): SortBy => store.sortBy;
export const selectSearchBy = (store: InitialState): SearchBy => store.searchBy;
export const selectsearchInput = (store: InitialState): string => store.searchInput;
export const selectIsLoading = (store: InitialState): boolean => store.isLoading;
