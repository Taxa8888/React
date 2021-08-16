import { SearchBy } from '../app/app.types';

export interface SearchProps {
    title: string;
    onSearch(value: string): void;
    searchBy: SearchBy;
    onSearchByChange(searchByValue: SearchBy): void;
}
