import { DataMovie } from '../../data/data.import';

export interface MainProps {
    movies: DataMovie[];
    clickChosenMovie(value: DataMovie): void;
}
