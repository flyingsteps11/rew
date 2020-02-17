import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {LOGIN_LINK,MAIN_PAGE} from './link';


import {LoginFormContainer} from "../containers";
import HeaderContainer from "../containers/HeaderContainer";
import PrivateRoute from "./PrivateRoute";
function MyRouter() {
    return(
        <Switch>
            <Route exact path={LOGIN_LINK} component={LoginFormContainer}/>
            <PrivateRoute path='/' component={HeaderContainer}/>
        </Switch>
    );
}

export default MyRouter