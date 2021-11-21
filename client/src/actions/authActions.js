import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, CLEAR_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

//Login User
export const login = formData => async dispatch => {
    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/auth', formData, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        loadUser();
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        })
    }
}

//Load User
export const loadUser = () => async dispatch => {
    // @todo -- load token into globak headers

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
}

//Logout
export const logout = () => {
    return ({ type: LOGOUT });
};

//Clear Error
export const clearErrors = () => {
    return ({ type: CLEAR_ERRORS });
};