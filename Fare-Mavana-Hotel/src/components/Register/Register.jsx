import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";

export default function Register() {

    const {registerSubmitHandler}=useContext(AuthContext);

const RegisterFormKeys={
    Email:'email',
    Password:'password',
    RePassword:'rePassword',
    Username:'username'
}
    const { formValues, onChange, onSubmit } = useForm(registerSubmitHandler ,{
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RePassword]:'',

    });


    return (

        <section id="registerPage">
            <form className="registerForm" onSubmit={onSubmit} >

                <div>
                    <h2>Register</h2>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input
                            name={RegisterFormKeys.Email}
                            id="username"
                            type="text"
                            onChange={onChange}
                            value={formValues[RegisterFormKeys.Email]}
                        />
                    </div>

                    <div className="username">
                        <label htmlFor="username">Username:</label>
                        <input
                            name={RegisterFormKeys.Username}
                            id="username"
                            type="text"
                            onChange={onChange}
                            value={formValues[RegisterFormKeys.Username]}
                        />
                    </div>


                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input
                            name={RegisterFormKeys.Password}
                            id="password"
                            type="text"
                            onChange={onChange}
                            value={formValues[RegisterFormKeys.Password]}

                        />
                    </div>

                    <div className="rePassword">
                        <label htmlFor="rePassword">Repeat Password:</label>
                        <input
                            name={RegisterFormKeys.RePassword}
                            id="rePassword"
                            type="text"
                            onChange={onChange}
                            value={formValues[RegisterFormKeys.RePassword]}

                        />
                    </div>


                    <button className="btn" type="submit"  > Register</button >
                </div >
            </form >
        </section >
    )
}