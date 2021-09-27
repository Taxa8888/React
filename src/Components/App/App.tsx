import React, { ReactElement } from 'react';
import { Header } from '../header/header';
import { HeaderDescription } from '../headerdescription/headerdescription';
import { Sort } from '../sort/sort';
import { SortDescription } from '../sortdescription/sortdescription';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

export const App = (): ReactElement => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Sort />
                    </Route>
                    <Route path="/movie/:id">
                        <HeaderDescription />
                        <SortDescription />
                    </Route>
                </Switch>
                <Main />
                <Footer />
            </Router>
        </Provider>
    );
};
