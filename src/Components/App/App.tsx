import React, { ReactElement } from 'react';
import { Header } from '../header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { useSelector } from 'react-redux';

export const App = (): ReactElement => {
    const isRoute: Boolean = useSelector((store) => store.isRoute);
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
