import React from 'react';
import './button.style.scss';

const Button = ({ className, onClick, style, children }) => (
    <button className={className} type="button" onClick={onClick} style={style}>
        {children}
    </button>
);

export default Button;
