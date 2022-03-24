import loginActions from 'actions/login.action';
import Breadcrumb from 'components/common/breadcrumb'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialValue = {
        username: "",
        password: ""
    }
    const [loginDetails, setLoginDetails] = useState(initialValue);
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginActions.login());
        let bodyData = loginDetails;
        console.log(bodyData)
        fetch("http://localhost/meapi/auth.php/", {
            method: "POST", body: JSON.stringify(bodyData)
        }).then((res) => res.json())
            .then((result) => {
                if (result.status === "success") {
                    toast.success("login successfully");
                    dispatch(loginActions.loginSuccess({ data: result }))
                    history.push('/account');
                } else {
                    toast.error("wrong credential");
                    dispatch(loginActions.loginError({ error: result }))
                }

            })
            .catch((e) => console.error(e));

    }
    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }
    // const inputFields = [
    //     {
    //         id: 1,
    //         name: "email",
    //         type: "email",
    //         placeholder: "Email Address",
    //         label: "Email Address",
    //         errorMessage: "It should be valid email address",
    //         pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9.-]{2,}$",
    //         required: true,
    //         half: true
    //     },
    //     {
    //         id: 2,
    //         name: "password",
    //         type: "password",
    //         placeholder: "Password",
    //         label: "Password",
    //         errorMessage: "password should be of 8-20 character and include at least 1 letter, 1 number and 1 special character",
    //         pattern: `^(?=.*?[A-Za-z])(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
    //         required: true,
    //         half: true
    //     },
    // ]
    console.log(loginDetails)
    return (
        <>
            <Breadcrumb />
            <section className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-form">
                                <h2>Login</h2>
                                <form action="#" onSubmit={handleLogin}>

                                    <div className="group-input">
                                        <label htmlFor="username">Username or email address *</label>
                                        <input type="text" id="username" name='username' onChange={handleChange} value={loginDetails.username} />
                                    </div>
                                    <div className="group-input">
                                        <label htmlFor="pass">Password *</label>
                                        <input type="password" id="pass" name="password" onChange={handleChange} value={loginDetails.password} />
                                    </div>
                                    <div className="group-input gi-check">
                                        <div className="gi-more">
                                            <label htmlFor="save-pass">
                                                Save Password
                                                <input type="checkbox" id="save-pass" />
                                                <span className="checkmark" />
                                            </label>
                                            <a href="#/" className="forget-pass">Forget your Password</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="site-btn login-btn">Sign In</button>
                                </form>
                                <div className="switch-login">
                                    <Link to="/account" className="or-login">Or Create An Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login