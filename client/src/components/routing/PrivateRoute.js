import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";


const PrivateRoute = (props) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    if (!isAuthenticated && !loading) {
        return <Redirect to='/login' />;
    } else {
        return <Route exact path={props.path} component={props.component} />
    }
}

export default PrivateRoute;
