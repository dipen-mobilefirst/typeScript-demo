import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute: React.FC<RouteProps> = ({component: Component , ...rest}) => {
    if(!Component) return null;
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;