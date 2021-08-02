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
                    data.map(
                        ({
                            idFilm,
                            titleFilm,
                            posterPathFilm,
                            releaseDateFilm,
                            runtimeFilm,
                            genresFilm,
                            overviewfilm,
                        }) => (
                            <MovieCard
                                onClick={handleChosenMovie({
                                    idFilm,
                                    titleFilm,
                                    posterPathFilm,
                                    releaseDateFilm,
                                    runtimeFilm,
                                    genresFilm,
                                    overviewfilm,
                                })}
                                key={idFilm}
                                img={posterPathFilm}
                                title={titleFilm}
                                year={releaseDateFilm.slice(0, 4)}
                                time={`${runtimeFilm} min`}
                                genre={genresFilm.slice(0, 2).toString()}
                            />
                        )
                    )
                )}
            </div>
        </main>
    );
};

export default Main;
