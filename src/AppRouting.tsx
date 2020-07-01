import React, { Component } from 'react';
import { Route, Redirect, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import Login from './container/auth/login/Login';
import axios from 'axios';
import Register from './container/auth/register/Register';
import Header from './container/common/header/Header'
import { LoginProvider } from './store/reducer/LoginReducer';

type PathParamsType = {
    param: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {
}

class AppRouting extends Component<(PropsType)> {

    render() {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
        }
        //code for protected routing before user authentication and token generation
        let routes = (
            <LoginProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect to="/login" />
                </Switch>
            </LoginProvider>
        );
        //code for protected routing after user gets authenticated and token is generated.
        if (token) {
            routes = (
                <LoginProvider>
                    <Switch>
                        <Route path="/home" component={Header} />
                        <Route path="/" exact component={Header} />
                        <Redirect to="/" />
                    </Switch>
                </LoginProvider>
            );
        }

        return (
            <React.Fragment>
                {routes}
            </React.Fragment>
        )
    }
}
export default withRouter(AppRouting);