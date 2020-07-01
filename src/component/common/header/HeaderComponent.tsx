import React, { Fragment } from 'react';
import classes from '../header/Header.module.css';
import { Link } from 'react-router-dom';
import withLoading from '../../../hoc/loading/withLoading';

const HeaderComponent = (props: any) => {

    let mainValue = props;

    return (
        <Fragment>
            <div className={classes.Header}>Global Lite
            <Link to='/' className={classes.RightLink}><span onClick={() => {localStorage.clear()}}>Logout</span></Link>
                {mainValue ? <Link to='/home/userInfo' className={classes.RightLink}>{mainValue.firstname} {mainValue.lastname}</Link> : null}
            </div>
        </Fragment>
    )
}

export default withLoading(HeaderComponent);