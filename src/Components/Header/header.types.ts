import { SearchBy } from "../app/app.types";

export interface HeaderProps {
    searchBy: SearchBy;
    onSearch (value: string): void;
    onSearchByChange (searchBy: SearchBy): void;
}