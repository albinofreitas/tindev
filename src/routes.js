import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import Main from './pages/Main/Main';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/dev/:id" exact component={Main}></Route>
        </BrowserRouter>
    );
}

export default Routes;