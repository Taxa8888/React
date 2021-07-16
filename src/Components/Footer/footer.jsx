import React from 'react';
import './footer.style.scss';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';

const Footer = () => (
    <header className="footer">
        <div className="footerContainer">
            <p className="footerTitle">{MAIN_PROJECT_TITLE}</p>
        </div>
    </header>
);

export default Footer;
