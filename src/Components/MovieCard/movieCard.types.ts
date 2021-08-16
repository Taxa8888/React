import { MouseEventHandler } from 'react';

export interface MovieCardProps {
    img: string;
    title: string;
    year: string;
    time: number;
    genre: string;
    onClick: MouseEventHandler;
}
