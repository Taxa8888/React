import { DataMovie, MockDataMovie } from './data.types';
import movies from './mov.json';

export const dataMovies: DataMovie[] = movies.map(
    ({ id, title, genres, runtime, overview, ...movie }: MockDataMovie) => ({
        id,
        title,
        voteAverage: movie.vote_average,
        releaseDate: movie.release_date,
        posterPath: movie.poster_path,
        genres,
        runtime,
        overview,
    })
);
