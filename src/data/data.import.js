import movies from './mov.json';

const dataMovies = movies.map((film) => ({
    idFilm: film.id,
    titleFilm: film.title,
    voteAverageFilm: film.vote_average,
    releaseDateFilm: film.release_date,
    posterPathFilm: film.poster_path,
    genresFilm: film.genres,
    runtimeFilm: film.runtime,
}));

export default dataMovies;
