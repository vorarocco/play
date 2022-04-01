import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logOutFailure, logOutStart, logOutSuccess } from "./AuthActions";


export const login = async (user,dispatch)=> {
    dispatch(loginStart())
    try{
        const res = await axios.post(`${process.env.REACT_APP_backendURI}auth/login`, user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}
export const logOut = async (user,dispatch)=> {
    dispatch(logOutStart())
    try{
        const res = await axios.post(`${process.env.REACT_APP_backendURI}auth/logout`, user)
        dispatch(logOutSuccess(res.data))
    }catch(err){
        dispatch(logOutFailure())
    }
}