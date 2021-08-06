import React from 'react';
import MovieCard from '../movieCard/movieCard';
import './main.style.scss';

const Main = ({ movies, clickChosenMovie }) => {
    const handleChosenMovie = (value) => () => {
        clickChosenMovie(value);
    };
    return (
        <main className="main">
            <div className="mainContainer">
                {movies.length === 0 ? (
                    <div className="notFound">No films found</div>
                ) : (
                    movies.map((movie) => {
                        const { id, posterPath, title, releaseDate, runtime, genres } = movie;
                        return (
                            <MovieCard
                                onClick={handleChosenMovie(movie)}
                                key={id}
                                img={posterPath}
                                title={title}
                                year={releaseDate.slice(0, 4)}
                                time={runtime}
                                genre={genres.join(', ')}
                            />
                        );
                    })
                )}
            </div>
        </main>
    );
};

export default Main;
