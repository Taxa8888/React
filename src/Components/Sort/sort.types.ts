import { SortBy } from '../app/app.types';
import { DataMovie } from './../../data/data.import';

export interface SortProps {
    movies: DataMovie[];
    sortBy: SortBy;
    onSortByChange(sortByValue: SortBy): void;
}
