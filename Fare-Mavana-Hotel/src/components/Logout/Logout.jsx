import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import * as authService from '../../services/authService';
import AuthContext from "../../context/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler, token } = useContext(AuthContext);


    useEffect(() => {
        authService.logout(token)
            .then(() => {
                logoutHandler();
                navigate('/');
            })
            .catch((err) => {
                console.log(err);;
                navigate('/');
            })
    }, []);

    return null;

}