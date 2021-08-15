import React, { FC, ReactElement } from 'react';
import './button.style.scss';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ className, onClick, style, children }): ReactElement => (
    <button className={className} type="button" onClick={onClick} style={style}>
        {children}
    </button>
);

export default Button;
