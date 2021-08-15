import { CSSProperties, MouseEventHandler } from 'react';

export interface ButtonProps {
    className: string;
    onClick: MouseEventHandler;
    style: CSSProperties;
    children: string;
}
