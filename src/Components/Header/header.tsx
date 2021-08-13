import React, { ReactElement, FC, CSSProperties } from 'react';
import Search from '../search/search';
import './header.style.scss';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HeaderProps } from './header.types';
import headerBgImg from '../../img/header.jpg';

console.log(headerBgImg);

const headerBackground: CSSProperties = { backgroundImage: `url(${headerBgImg})` };

const Header: FC<HeaderProps> = ({ searchBy, onSearch, onSearchByChange }): ReactElement => (
    <header className="header" style={headerBackground}>
        <div className="headerContainer">
            <p className="headerTitle">{MAIN_PROJECT_TITLE}</p>
            <Search
                searchBy={searchBy}
                title="FIND YOUR MOVIE"
                onSearch={onSearch}
                onSearchByChange={onSearchByChange}
            />
        </div>
    </header>
);

export default Header;
