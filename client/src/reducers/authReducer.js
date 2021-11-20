import { USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, LOGOUT, CLEAR_ERRORS } from '../actions/types.js';

const initialState = {
    user: {
        email: "gracemiao2017@gmail.com",
        password: "123456"
    },
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};


export default authReducer;