import React, { ReactElement } from 'react';
import { Header } from '../header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { store } from '../../store/store';
import { Provider, useSelector } from 'react-redux';

export const App = (): ReactElement => {
    let chosenMovie = useSelector((store) => store.chosenMovie);
    return (
        <Provider store={store}>
            {!chosenMovie ? (
                <>
                    <Header />
                    <Sort />
                </>
            ) : (
                <>
                    <HeaderDescription chosenMovie={chosenMovie} />
                    <SortDescription chosenMovie={chosenMovie} />
                </>
            )}
            <Main />
            <Footer />
        </Provider>
    );
};
