import React from "react";
import * as registerService from '../../../service/auth/register/Register.service';
import { useHistory } from 'react-router-dom';
import RegisterComponent from '../../../component/auth/register/RegisterComponent';


function Register(){
    const history = useHistory()

    const onRegister = (credentials:any) => {
        if (credentials !== null) {
            registerService.register(credentials).then(res => {
                if (res) {
                    history.push('/login')
                }
                     
            })
        }
    }
        return <RegisterComponent register={onRegister}/>;
}

export default Register;