import { SearchBy, SortBy } from '../../Components/app/app.types';

export interface ChosenDataMovie {
    title: string;
    releaseDate: string;
    posterPath: string;
    genres: string[];
    runtime: number;
    overview: string;
}
export interface DataMovie {
    id: number;
    title: string;
    voteAverage: number;
    releaseDate: string;
    posterPath: string;
    genres: string[];
    runtime: number;
    overview: string;
}

export interface ResponseDataMovie {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

export interface InitialState {
    movies: DataMovie[];
    total: number;
    offset: number;
    chosenMovie: ChosenDataMovie;
    sortBy: SortBy;
    searchBy: SearchBy;
    searchInput: string;
    isMoviesLoading: boolean;
    isChosenMovieLoadin: boolean;
}

export interface LoadMoviesProps {
    search: string;
    sortBy: SortBy;
    searchBy: SearchBy;
    offset: number;
    limit: number;
}

export interface LinkParams {
    id: string;
}
export interface MoviesLoadActionPayload {
    data: ResponseDataMovie[];
    total: number;
}

export type ChosenMoviesActionPayload = ResponseDataMovie;
export interface ToggleSortOptionActionPayload {
    value: SortBy;
}
export interface ToggleSearchOptionActionPayload {
    value: SearchBy;
}
export interface ToggleClickOnSearchOptionActionPayload {
    value: string;
}

export interface ClickOnSetOffset {
    value: number;
}

export interface Action {
    type: string;
}

type MoviesActionPayloads =
    | MoviesLoadActionPayload
    | ClickOnSetOffset
    | ToggleSortOptionActionPayload
    | ToggleSearchOptionActionPayload
    | ToggleClickOnSearchOptionActionPayload
    | ChosenMoviesActionPayload;
export interface MoviesAction<T = MoviesActionPayloads> extends Action {
    payload: T;
}
