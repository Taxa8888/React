import movies from './mov.json';

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

export const dataMovies: DataMovie[] = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
    genres: movie.genres,
    runtime: movie.runtime,
    overview: movie.overview,
}));
