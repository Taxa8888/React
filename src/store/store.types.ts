import { SearchBy, SortBy } from '../Components/app/app.types';
import { ChosenDataMovie, DataMovie } from '../data/data.types';

export interface initialStateField {
    movies: DataMovie[];
    chosenMovie: ChosenDataMovie;
    searchBy: SearchBy;
    sortBy: SortBy;
    isRoute: Boolean;
}
