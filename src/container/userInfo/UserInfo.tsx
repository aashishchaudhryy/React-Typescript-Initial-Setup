import React from 'react';
import UserInfoComponent from '../../component/userInfo/UserInfoComponent'
import { LoginContext } from '../../store/reducer/LoginReducer';
import { LOGIN_USER_NULL } from '../../store/actionTypes/LoginActionTypes';

const UserInfo = (props:any) => {

    const { state, dispatch } = React.useContext(LoginContext);

    const dispatchNull = () => {
        if (["", undefined].includes(state.uuid))
            dispatch({ type: LOGIN_USER_NULL })
    }

    if (state)
        dispatchNull()

    return <UserInfoComponent {...state} />;
    
}

export default UserInfo;