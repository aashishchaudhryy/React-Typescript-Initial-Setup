import React, { Fragment } from 'react';
import HeaderComponent from '../../../component/common/header/HeaderComponent';
import LayoutRouting from '../../layoutRouting/LayoutRouting';
import { LoginContext } from '../../../store/reducer/LoginReducer';
import { LOGIN_USER_NULL } from '../../../store/actionTypes/LoginActionTypes';

const Header = (props: any) => {

    const { state, dispatch } = React.useContext(LoginContext);

    const dispatchNull = () => {
        if (["", undefined].includes(state.uuid))
            dispatch({ type: LOGIN_USER_NULL })
    }

    if (state)
        dispatchNull()


    return (
        <Fragment>
            <HeaderComponent {...state} />
            <div style={{ marginTop: "4.3rem" }}>
                <LayoutRouting />
            </div>
        </Fragment>
    )
}

export default Header;