import { DataMovie } from '../../data/data.import';

export interface HeaderDescriptionProps {
    chosenMovie: DataMovie;
    clickSearchButton(value: string): void;
}
