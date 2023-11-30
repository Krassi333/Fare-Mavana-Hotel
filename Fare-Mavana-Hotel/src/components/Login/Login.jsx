import { useContext } from "react";
import useForm from "../../hooks/useForm";
import authContext from "../../context/authContext";
import AuthContext from "../../context/authContext";

export default function Login() {

    const loginSubmitHandler=useContext(AuthContext);

const LoginFormKeys={
    Username:'username',
    Password:'password'
}
    const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler ,{
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Password]: ''
    });


    return (

        <section id="loginPage">
            <form className="loginForm" onSubmit={onSubmit} >

                <div>
                    <h2>Login</h2>
                    <div className="title">
                        <label htmlFor="username">Username:</label>
                        <input
                            name={LoginFormKeys.Username}
                            id="username"
                            type="text"
                            onChange={onChange}
                            value={formValues[LoginFormKeys.Username]}
                        />
                    </div>


                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input
                            name={LoginFormKeys.Password}
                            id="password"
                            type="text"
                            onChange={onChange}
                            value={formValues[LoginFormKeys.Password]}

                        />
                    </div>


                    <button className="btn" type="submit"  > Login</button >
                </div >
            </form >
        </section >
    )
}