import React from 'react';
import './footer.style.scss';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';

const Footer = ({footerBgImg}) => (
    <header className="footer" style={{backgroundImage: `url(${footerBgImg})`}}>
        <div className="footerContainer">
            <p className="footerTitle">{MAIN_PROJECT_TITLE}</p>
        </div>
    </header>
);

export default Footer;
