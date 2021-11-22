import { SET_ALERT, REMOVE_ALERT } from './types';
import { uuid, v4 } from 'uuidv4';

export const setAlert = (msg, type, timeout = 1000) => async dispatch => {
    const id = v4;
    dispatch({
        type: SET_ALERT,
        payload: { msg, type, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}
