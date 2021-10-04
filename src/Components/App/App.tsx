import React, { ReactElement } from 'react';
import { Header } from '../header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = (): ReactElement => {
    return (
        <Router>
            <Switch>
                <Route exact path={['/', '/search/*']}>
                    <Header />
                    <Sort />
                </Route>
                <Route path="/movie/:id">
                    <HeaderDescription />
                    <SortDescription />
                </Route>
                <Route path="*">
                    <div>KUDA?</div>
                </Route>
            </Switch>
            <Main />
            <Footer />
        </Router>
    );
};
