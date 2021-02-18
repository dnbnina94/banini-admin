import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './styles/styles.css';

import firebase from './firebase/firebase';
import { Provider } from 'react-redux';
import { login, logout } from './redux/actions/auth';
import store from './redux/store';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let isRendered = false;
const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
    } else {
        store.dispatch(logout());
        renderApp();
    }
});