import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {LOGIN_LINK, MAIN_PAGE, ORDERS} from './link';


import {LoginFormContainer} from "../containers";
import HeaderContainer from "../containers/HeaderContainer";
import PrivateRoute from "./PrivateRoute";
import JwtHelper from "../utils/jwtHelper";
function MyRouter() {
    return(
        <Switch>

            <Route exact path={LOGIN_LINK} component={LoginFormContainer}/>
            <PrivateRoute path='/' component={HeaderContainer}/>
        </Switch>
    );
}

export default MyRouter