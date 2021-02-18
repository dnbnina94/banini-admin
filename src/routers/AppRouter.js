import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
 
import Header from '../components/Header';
import Loader from '../components/Loader';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Loader />
                <Header/>
                <Switch>
                    <PublicRoute path="/login" component={LoginPage} />
                    <PrivateRoute path="/" component={HomePage} exact={true} key="home" />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;