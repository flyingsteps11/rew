import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import JwtHelper from '../../utils/jwtHelper';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...restProps}) => (
    <Route
        {...restProps}
        render={props => {
            return JwtHelper.isTokenExist ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: "/login"}} />
            );
        }}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default PrivateRoute;