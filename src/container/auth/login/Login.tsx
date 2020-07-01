import React, { useState } from 'react';
import * as loginService from '../../../service/auth/login/Login.service';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../../../component/auth/login/LoginComponent';
import { LOGIN_SUCCESS } from '../../../store/actionTypes/LoginActionTypes';
import { LoginContext } from '../../../store/reducer/LoginReducer';
import Loader from '../../../component/common/loader/Loader';

function Login(props:any):JSX.Element {

    const { dispatch } = React.useContext(LoginContext);
    const [loading, setLoading] = useState<boolean>(false);

    const history = useHistory()

    let access: string;
    let refresh: string;


    const onLogin = async (credentials: any) => {
        setLoading(true)
        if (credentials !== null) {
            const res = await loginService.login(credentials)
            if (res) {
                access = "JWT " + res.access;
                refresh = "JWT " + res.refresh;
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                const main = await loginService.onMain(access);
                if (main)
                    dispatch({ type: LOGIN_SUCCESS, payload: main})
                setLoading(false)
                history.push('/')
            }
        }
    }

    return loading? <Loader/> :
    <LoginComponent {...props} login={onLogin}/>
}

export default Login;