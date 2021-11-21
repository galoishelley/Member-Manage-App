import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alertActions.js';
import { login, clearErrors } from '../../actions/authActions.js';

const Login = ({ auth: { isAuthenticated, error }, clearErrors, login, setAlert }) => {

    const history = useHistory();

    useEffect(() => {

        if (isAuthenticated) {
            history.push("/");
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }

        //eslint-disable-next-line
    }, [error, isAuthenticated, history]);


    const [user, setUser] = useState({
        email: 'gracemiao2017@gmail.com',
        password: '123456'
    });

    const { email, password } = user;

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert("please fill in all feilds", 'danger');
        } else {
            login({
                email,
                password
            });
        }
    }

    const onChange = e => setUser({
        ...user, [e.target.name]: e.target.value
    });


    return (
        <div className='form-container'>
            <h1>
                Account Login
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange} required />
                </div>
                <input type="submit" value='Login' className="btn btn-dark btn-block" />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { clearErrors, login, setAlert })(Login);