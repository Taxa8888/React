import { SearchBy } from "../App/app.types";

export interface HeaderProps {
    searchBy: SearchBy;
    onSearch (value: string): void;
    onSearchByChange (searchBy: SearchBy): void;
}