import movies from './mov.json';

const dataMovies = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
    genres: movie.genres,
    runtime: movie.runtime,
    overview: movie.overview,
}));

export default dataMovies;
