import movies from './mov.json';

const dataMovies = movies.map((film) => ({
    id: film.id,
    title: film.title,
    voteAverage: film.vote_average,
    releaseDate: film.release_date,
    posterPath: film.poster_path,
    genres: film.genres,
    runtime: film.runtime,
    overview: film.overview,
}));

export default dataMovies;
