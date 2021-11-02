import { MutableRefObject } from 'react';
import { useLocation } from 'react-router-dom';
import { ParseUrlParams, SearchBy } from './app.types';

export const useQuery = (): URLSearchParams => new URLSearchParams(useLocation().search);

export const parseUrlParams = <T = ParseUrlParams>(
    urlParams: MutableRefObject<URLSearchParams>
): T => {
    const result: ParseUrlParams = {};

    for (const [key, value] of urlParams.current.entries()) {
        result.searchBy = key as SearchBy;
        result.searchInput = value;
    }

    return result as T;
};
