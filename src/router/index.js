import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {GRID_LIST_LINK, LOGIN_LINK, MAIN_PAGE, ORDERS} from './link';


import {LoginFormContainer} from "../containers";
import HeaderContainer from "../containers/HeaderContainer";
import PrivateRoute from "./PrivateRoute";
import JwtHelper from "../utils/jwtHelper";
import Grids from "../containers/GridContainer";
function MyRouter() {
    return(
        <Switch>
            <Route exact path={LOGIN_LINK} render={() => JwtHelper.isTokenExist ? <Redirect to={{pathname: "/grid/orders"}} /> : <LoginFormContainer />}/>
            <PrivateRoute path ={GRID_LIST_LINK} component={Grids}/>
        </Switch>
    );
}

export default MyRouter