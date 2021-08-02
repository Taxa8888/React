import React from 'react';
import MovieCard from '../movieCard/movieCard';
import './main.style.scss';

const Main = ({ data, clickChosenMovie }) => {
    const handleChosenMovie = (value) => () => {
        clickChosenMovie(value);
    };
    return (
        <main className="main">
            <div className="mainContainer">
                {data.length === 0 ? (
                    <div className="notFound">No films found</div>
                ) : (
                    data.map((film) => (
                        <MovieCard
                            onClick={handleChosenMovie(film)}
                            key={film.id}
                            img={film.posterPath}
                            title={film.title}
                            year={film.releaseDate.slice(0, 4)}
                            time={`${film.runtime} min`}
                            genre={film.genres.slice(0, 2).toString()}
                        />
                    ))
                )}
            </div>
        </main>
    );
};

export default Main;
