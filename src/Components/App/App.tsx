import React, { ReactElement } from 'react';
import { Header } from '../header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { useSelector } from 'react-redux';
import { selectIsRoute } from '../../store/movies/movies.selectors';

export const App = (): ReactElement => {
    const isRoute = useSelector(selectIsRoute);
    return (
        <>
            {isRoute ? (
                <>
                    <Header />
                    <Sort />
                </>
            ) : (
                <>
                    <HeaderDescription />
                    <SortDescription />
                </>
            )}
            <Main />
            <Footer />
        </>
    );
};
