import React, { Suspense, Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

const asyncUserInfo = React.lazy(() => import('../userInfo/UserInfo'));

const LayoutRouting = () => {
    return (
        <Fragment>
            <Suspense fallback={<span></span>}>
                <Switch>
                    <Route exact path="/home/userInfo" component={asyncUserInfo} />
                    {<Redirect from='/' to='/home' />}
                </Switch>
            </Suspense>
        </Fragment>
    )
}

export default withRouter(LayoutRouting);