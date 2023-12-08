import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import { useFormik } from 'formik';


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        RePassword: 'rePassword',
        Username: 'username'
    }


    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format!'
        }

        if (!values.username) {
            errors.username = 'Username is required!';
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        }

        if (!values.rePassword) {
            errors.rePassword = 'This field is required!';
        } else if (values.rePassword != values.password) {
            errors.rePassword = "Password and repeated password don't match!";

        }
        return errors;
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            rePassword: ''
        },

        onSubmit: (values) => {
            registerSubmitHandler(values);
        },

        validate
    })


    return (

        <section id="registerPage">
            <form className="registerForm" onSubmit={formik.handleSubmit} >

                <div>
                    <h2>Register</h2>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input
                            name={RegisterFormKeys.Email}
                            id="email"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                         { formik.touched.email && formik.errors.email &&(<p className='error'>{formik.errors.email}</p>) }
                    </div>

                    <div className="username">
                        <label htmlFor="username">Username:</label>
                        <input
                            name={RegisterFormKeys.Username}
                            id="username"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                         { formik.touched.username && formik.errors.username &&(<p className='error'>{formik.errors.username}</p>) }

                    </div>


                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input
                            name={RegisterFormKeys.Password}
                            id="password"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}

                        />
                         { formik.touched.password && formik.errors.password &&(<p className='error'>{formik.errors.password}</p>) }

                    </div>

                    <div className="rePassword">
                        <label htmlFor="rePassword">Repeat Password:</label>
                        <input
                            name={RegisterFormKeys.RePassword}
                            id="rePassword"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}

                        />
                         { formik.touched.rePassword && formik.errors.rePassword &&(<p className='error'>{formik.errors.rePassword}</p>) }

                    </div>


                    <button className="btn" type="submit"  > Register</button >
                </div >
            </form >
        </section >
    )
}