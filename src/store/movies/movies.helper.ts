import { ChosenDataMovie, DataMovie, MockDataMovie } from './movies.types';

export const mapMovies = (movies: MockDataMovie): DataMovie[] =>
    movies.map(({ id, title, genres, runtime, overview, ...movie }: MockDataMovie) => ({
        id,
        title,
        voteAverage: movie.vote_average,
        releaseDate: movie.release_date,
        posterPath: movie.poster_path,
        genres,
        runtime,
        overview,
    }));

export const mapChosenMovie = ({
    title,
    poster_path,
    release_date,
    genres,
    runtime,
    overview,
}: MockDataMovie): ChosenDataMovie => {
    return {
        title,
        posterPath: poster_path,
        releaseDate: release_date,
        genres,
        runtime,
        overview,
    };
};