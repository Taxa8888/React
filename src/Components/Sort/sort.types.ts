import { SortBy } from '../app/app.types';
import { DataMovie } from '../../data/data.types';

export interface SortProps {
    movies: DataMovie[];
    sortBy: SortBy;
    onSortByChange(sortByValue: SortBy): void;
}
