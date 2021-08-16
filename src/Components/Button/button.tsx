import React, { FC, ReactElement } from 'react';
import { ButtonProps } from './button.types';
import './button.style.scss';

export const Button: FC<ButtonProps> = ({ className, onClick, style, children }): ReactElement => (
    <button className={className} type="button" onClick={onClick} style={style}>
        {children}
    </button>
);
