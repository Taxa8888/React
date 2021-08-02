import React, { useState } from 'react';
import Header from '../header/header';
import HeaderDescription from '../headerdescription/headerdescription';
import Sort from '../sort/sort';
import SortDescription from '../sortdescription/sortdescription';
import Main from '../main/main';
import Footer from '../footer/footer';
import dataMovies from '../../data/data.import';
import { SEARCH_BY, SORT_BY } from './app.constants';
import checkStringMatch from './app.helpers';
import './app.scss';

const App = () => {
    const [movies, setMovies] = useState(dataMovies);
    const [searchBy, setSearchBy] = useState(SEARCH_BY.TITLE);
    const [sortBy, setSortBy] = useState(SORT_BY.RELEASEDATE);
    const [chosenMovie, setChosenMovie] = useState('');

    const sortMovies = React.useMemo(() => {
        if (sortBy === SORT_BY.RELEASEDATE) {
            movies.sort((a, b) => (a.releaseDateFilm > b.releaseDateFilm ? 1 : -1));
        } else {
            movies.sort((a, b) => (a.voteAverageFilm > b.voteAverageFilm ? 1 : -1));
        }
        return movies;
    }, [sortBy]);

    const handleSearch = (value) => {
        setMovies(
            dataMovies.filter(({ titleFilm, genresFilm }) =>
                searchBy === SEARCH_BY.TITLE
                    ? checkStringMatch(titleFilm, value)
                    : genresFilm.slice(0, 2).some((genreFilm) => checkStringMatch(genreFilm, value))
            )
        );
    };

    return (
        <>
            {chosenMovie === '' ? (
                <>
                    <Header
                        searchBy={searchBy}
                        onSearch={handleSearch}
                        onSearchByChange={setSearchBy}
                    />
                    <Sort data={movies} sortBy={sortBy} onSortByChange={setSortBy} />
                </>
            ) : (
                <>
                    <HeaderDescription
                        data={movies}
                        chosenMovie={chosenMovie}
                        clickSearchButton={setChosenMovie}
                    />
                    <SortDescription data={movies} chosenMovie={chosenMovie} />
                </>
            )}
            <Main data={sortMovies} clickChosenMovie={setChosenMovie} />
            <Footer />
        </>
    );
};

export default App;
