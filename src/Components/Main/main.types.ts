import { DataMoviesTypes } from '../../data/data.import';

export interface MainProps {
    movies: DataMoviesTypes;
    clickChosenMovie(value: DataMoviesTypes): void;
}
