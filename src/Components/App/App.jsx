import React, { useState, useMemo } from 'react';
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
import headerBgImg from "../../img/header.jpg";
import footerBgImg from "../../img/footer.jpg"

const App = () => {
    const [movies, setMovies] = useState(dataMovies);
    const [searchBy, setSearchBy] = useState(SEARCH_BY.TITLE);
    const [sortBy, setSortBy] = useState(SORT_BY.RELEASEDATE);
    const [chosenMovie, setChosenMovie] = useState('');

    const sortMovies = useMemo(() => {

        const tempMovies = [...movies];

        return sortBy === SORT_BY.RELEASEDATE
            ? tempMovies.sort((movieA, movieB) =>
                  movieA.releaseDate > movieB.releaseDate ? 1 : -1
              )
            : tempMovies.sort((movieA, movieB) =>
                  movieA.voteAverage > movieB.voteAverage ? 1 : -1
              );
    }, [movies, sortBy]);

    const handleSearch = (value) => {
        setMovies(
            dataMovies.filter(({ title, genres }) =>
                searchBy === SEARCH_BY.TITLE
                    ? checkStringMatch(title, value)
                    : genres.some((genre) => checkStringMatch(genre, value))
            )
        );
    };

    return (
        <>
            {chosenMovie === '' ? (
                <>
                    <Header
                        headerBgImg={headerBgImg}
                        searchBy={searchBy}
                        onSearch={handleSearch}
                        onSearchByChange={setSearchBy}
                    />
                    <Sort
                        movies={movies}
                        sortBy={sortBy}
                        onSortByChange={setSortBy} />
                </>
            ) : (
                <>
                    <HeaderDescription
                        headerBgImg={headerBgImg}
                        chosenMovie={chosenMovie}
                        clickSearchButton={setChosenMovie}
                    />
                    <SortDescription
                        chosenMovie={chosenMovie} />
                </>
            )}
            <Main movies={sortMovies} clickChosenMovie={setChosenMovie} />
            <Footer footerBgImg={footerBgImg}  />
        </>
    );
};

export default App;
