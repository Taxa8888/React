import React, { ReactElement } from 'react';
import { Header } from '../Header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../Sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../Main/main';
import { Footer } from '../Footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorPage } from '../errorpage/errorpage';

export const App = (): ReactElement => {
    return (
        <Router>
            <Switch>
                <Route exact path={['/', '/search/*']}>
                    <Header />
                    <Sort />
                    <Main />
                </Route>
                <Route path="/movie/:id">
                    <HeaderDescription />
                    <SortDescription />
                    <Main />
                </Route>
                <Route path={['*']}>
                    <ErrorPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};
