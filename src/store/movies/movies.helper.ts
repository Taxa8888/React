import { ChosenDataMovie, DataMovie, ResponseDataMovie } from './movies.types';

export const mapMovies = (movies: ResponseDataMovie[]): DataMovie[] =>
    movies.map(({ id, title, genres, runtime, overview, ...movie }: ResponseDataMovie) => ({
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
}: ResponseDataMovie): ChosenDataMovie => {
    return {
        title,
        posterPath: poster_path,
        releaseDate: release_date,
        genres,
        runtime,
        overview,
    };
};
