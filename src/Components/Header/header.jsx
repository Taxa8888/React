import React from 'react';
import Search from '../search/search';
import './header.style.scss';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';

const Header = ({ searchMovies, searchBy, onSearch, onSearchByChange, headerBgImg }) => (
    <header className="header" style={{backgroundImage: `url(${headerBgImg})`}}>
        <div className="headerContainer">
            <p className="headerTitle">{MAIN_PROJECT_TITLE}</p>
            <Search
                searchBy={searchBy}
                title="FIND YOUR MOVIE"
                searchMovies={searchMovies}
                onSearch={onSearch}
                onSearchByChange={onSearchByChange}
            />
        </div>
    </header>
);

export default Header;
