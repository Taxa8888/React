import React, { ReactElement } from 'react';
import { Search } from '../search/search';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from './header.constants';
import './header.style.scss';

export const Header = (): ReactElement => (
    <header className="header" style={HEADER_BG_IMAGE}>
        <div className="headerContainer">
            <p className="headerTitle">{MAIN_PROJECT_TITLE}</p>
            <Search title="FIND YOUR MOVIE" />
        </div>
    </header>
);
