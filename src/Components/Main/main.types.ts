import { DataMovie } from '../../data/data.types';

export interface MainProps {
    movies: DataMovie[];
    clickChosenMovie(value: DataMovie): void;
}
