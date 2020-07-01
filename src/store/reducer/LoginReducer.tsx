import { LOGIN_SUCCESS, LOGIN_USER_NULL } from '../actionTypes/LoginActionTypes'
import UserInfoModel from '../../model/userInfo/UserInfo.model'
import React, { Dispatch, useReducer, useEffect } from 'react'
import * as loginService from '../../service/auth/login/Login.service';

type LoginContext = {
  state: UserInfoModel;
  //dispatch: ({type}:{type:string}) => void;
  dispatch: Dispatch<any>
}

const initialState: UserInfoModel = new UserInfoModel()

export const LoginContext = React.createContext({} as LoginContext)

function LoginReducer(state: any, action: any) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload
    case LOGIN_USER_NULL:
      return null
    default:
      return state
  }
}

export function LoginProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(LoginReducer, initialState)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const getUser = async() => {
      if (accessToken){
        const main = await loginService.onMain(accessToken)
        dispatch({type: LOGIN_SUCCESS, payload:main})
      }
    }
    getUser()    
  }, [])

  return <LoginContext.Provider value={{ state, dispatch }}>{props.children}</LoginContext.Provider>
}