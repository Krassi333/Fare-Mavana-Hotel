import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useFormik } from 'formik';

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
//console.log('here');
    const LoginFormKeys = {
        Email: 'email',
        Password: 'password'
    }

    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format!'
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        }

        console.log(errors);
        return errors;
    }
    // const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler ,{
    //     [LoginFormKeys.Email]: '',
    //     [LoginFormKeys.Password]: ''
    // });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: (values) => {
            loginSubmitHandler(values);
        },

        validate
    })

    return (

        <section id="loginPage">
            <form className="loginForm" onSubmit={formik.handleSubmit} >

                <div>
                    <h2>Login</h2>
                    <div className="title">
                        <label htmlFor="email">Email:</label>
                        <input
                            name={LoginFormKeys.Email}
                            id="username"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        { formik.touched.email && formik.errors.email &&(<p className='error'>{formik.errors.email}</p>) }
                    </div>


                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input
                            name={LoginFormKeys.Password}
                            id="password"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}

                        />
                        {formik.touched.password && formik.errors.password && (<p className='error' >{formik.errors.password}</p>) }
                    </div>


                    <button className="btn" type="submit"  > Login</button >
                </div >
            </form >
        </section >
    )
}