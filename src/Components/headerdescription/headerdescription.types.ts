import { DataMovie } from '../../data/data.types';

export interface HeaderDescriptionProps {
    chosenMovie: DataMovie;
    clickSearchButton(value?: DataMovie): void;
}
