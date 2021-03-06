export enum SortBy {
    RELEASEDATE = 'release_date',
    RATING = 'vote_average',
}

export enum SearchBy {
    TITLE = 'title',
    GENRE = 'genres',
}

export interface ParseUrlParams {
    searchBy?: SearchBy;
    searchInput?: string;
}
