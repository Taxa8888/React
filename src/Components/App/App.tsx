import React, { useState, useMemo, ReactElement } from 'react';
import Header from '../header/header';
import HeaderDescription from '../headerdescription/headerdescription';
import Sort from '../sort/sort';
import SortDescription from '../sortdescription/sortdescription';
import Main from '../main/main';
import Footer from '../footer/footer';
import { dataMovies } from '../../data/data.import';
import { SortBy, SearchBy } from './app.types';
import checkStringMatch from './app.helpers';

const App = (): ReactElement => {
    const [movies, setMovies] = useState(dataMovies);
    const [searchBy, setSearchBy] = useState(SearchBy.TITLE);
    const [sortBy, setSortBy] = useState(SortBy.RELEASEDATE);
    const [chosenMovie, setChosenMovie] = useState(null);

    const sortMovies = useMemo(() => {
        const tempMovies = [...movies];

        return sortBy === SortBy.RELEASEDATE
            ? tempMovies.sort((movieA, movieB) =>
                  movieA.releaseDate > movieB.releaseDate ? 1 : -1
              )
            : tempMovies.sort((movieA, movieB) =>
                  movieA.voteAverage > movieB.voteAverage ? 1 : -1
              );
    }, [movies, sortBy]);

    const handleSearch = (value: string): void => {
        setMovies(
            dataMovies.filter(({ title, genres }) =>
                searchBy === SearchBy.TITLE
                    ? checkStringMatch(title, value)
                    : genres.some((genre) => checkStringMatch(genre, value))
            )
        );
    };

    return (
        <>
            {chosenMovie === null ? (
                <>
                    <Header
                        searchBy={searchBy}
                        onSearch={handleSearch}
                        onSearchByChange={setSearchBy}
                    />
                    <Sort movies={movies} sortBy={sortBy} onSortByChange={setSortBy} />
                </>
            ) : (
                <>
                    <HeaderDescription
                        chosenMovie={chosenMovie}
                        clickSearchButton={setChosenMovie}
                    />
                    <SortDescription chosenMovie={chosenMovie} />
                </>
            )}
            <Main movies={sortMovies} clickChosenMovie={setChosenMovie} />
            <Footer />
        </>
    );
};

export default App;
