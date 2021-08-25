import React, { ReactElement, FC } from 'react';
import { Search } from '../search/search';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HeaderProps } from './header.types';
import { HEADER_BG_IMAGE } from './header.constants';
import './header.style.scss';

export const Header: FC<HeaderProps> = (): ReactElement => (
    <header className="header" style={HEADER_BG_IMAGE}>
        <div className="headerContainer">
            <p className="headerTitle">{MAIN_PROJECT_TITLE}</p>
            <Search title="FIND YOUR MOVIE" />
        </div>
    </header>
);
