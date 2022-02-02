import React, { ReactElement } from 'react';
import { MAIN_PROJECT_TITLE } from '../app1/app.constants';
import { FOOTER_BG_IMAGE } from './footer.constants';
import './footer.style.scss';

export const Footer = (): ReactElement => (
    <header className="footer" style={FOOTER_BG_IMAGE}>
        <div className="footerContainer">
            <p className="footerTitle">{MAIN_PROJECT_TITLE}</p>
        </div>
    </header>
);
