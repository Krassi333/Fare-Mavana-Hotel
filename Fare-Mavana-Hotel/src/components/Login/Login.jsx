import { useContext } from "react";
import useForm from "../../hooks/useForm";
import authContext from "../../context/authContext";
import AuthContext from "../../context/authContext";

export default function Login() {

    const {loginSubmitHandler}=useContext(AuthContext);

const LoginFormKeys={
    Email:'email',
    Password:'password'
}
    const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler ,{
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    });


    return (

        <section id="loginPage">
            <form className="loginForm" onSubmit={onSubmit} >

                <div>
                    <h2>Login</h2>
                    <div className="title">
                        <label htmlFor="email">Email:</label>
                        <input
                            name={LoginFormKeys.Email}
                            id="username"
                            type="text"
                            onChange={onChange}
                            value={formValues[LoginFormKeys.Email]}
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