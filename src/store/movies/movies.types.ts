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

export interface MockDataMovie {
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

export interface initialStateField {
    movies: DataMovie[];
    chosenMovie?: ChosenDataMovie;
    sortBy: SortBy;
    searchBy: SearchBy;
    searchInput: string;
    isRoute: boolean;
}
