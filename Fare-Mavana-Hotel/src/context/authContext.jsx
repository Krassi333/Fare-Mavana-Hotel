import { createContext } from "react";
import { useNavigate } from 'react-router-dom'

import * as authService from '../services/authService'
import useLocalStorage from "../hooks/useLocalStorage";


const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth',{});

    const loginSubmitHandler = async (values) => {
        //console.log(values.password);
        const responce = await authService.login(values.email, values.password);
        localStorage.setItem('accessToken',responce.accessToken);

        setAuth(responce);
        navigate(-1);
    }

    const logoutHandler = async () => {
        //TO DO logout from the server
        localStorage.removeItem('accessToken');
        setAuth({});
    }

    const registerSubmitHandler = async (values) => {
        //console.log(values);
        const responce = await authService.register(
            values.email,
            values.username,
            values.password);

        localStorage.setItem('accessToken',responce.accessToken);
        setAuth(responce);
        navigate('/');
    }

    const contextValues = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        isAuthenticated: !!auth.username,
        token: auth.accessToken,
        userId: auth._id
    }
    return (
        < AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;