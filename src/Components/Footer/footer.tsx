import React from 'react';
import './footer.style.scss';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { FOOTER_BG_IMAGE } from './footer.constants';

const Footer = () => (
    <header className="footer" style={FOOTER_BG_IMAGE}>
        <div className="footerContainer">
            <p className="footerTitle">{MAIN_PROJECT_TITLE}</p>
        </div>
    </header>
);

export default Footer;
