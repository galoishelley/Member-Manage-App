import { DELETE_MEMBER, ADD_MEMBER, CLEAR_ERRORS, GET_MEMBERS, UPDATE_MEMBER, MEMBER_ERROR, SET_LOADING, SET_CURRENT, CLEAR_CURRENT, FILTER_MEMBERS, CLEAR_FILTER } from './types';
import axios from 'axios';

//delete member from server
export const deleteMember = (id) => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`/api/members/${id}`);

        if (res.data.reward_id === null) {
            await axios.delete(`/api/members/${id}`);

            dispatch({
                type: DELETE_MEMBER,
                payload: id
            });

        } else {
            const msg = "Can Not Delete";
            dispatch({
                type: MEMBER_ERROR,
                payload: msg
            });
        }

    } catch (err) {
        // dispatch({
        //     type: MEMBER_ERROR,
        //     payload: err.response.statusText
        // });

    }

}

//check member 's reward is exit
export const checkMemberReward = (id) => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`/api/members/${id}`);

        // if (res.data.reward_id !== null) {

        // }
    } catch (err) {
        dispatch({
            type: MEMBER_ERROR,
            payload: err.response.statusText
        });

    }

}



//add new member
export const addMember = member => async dispatch => {

    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }

    try {
        setLoading();
        const res = await axios.post('/api/members', member, config);

        dispatch({
            type: ADD_MEMBER,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MEMBER_ERROR,
            payload: err.response.statusText
        });

    }

}


// get members from server
export const getMembers = () => async dispatch => {

    try {
        setLoading();

        const res = await axios.get('/api/members');
        // const data = await res.json();

        dispatch({
            type: GET_MEMBERS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MEMBER_ERROR,
            payload: err.response.statusText
        });

    }

}


//update member from server
export const updateMember = member => async dispatch => {

    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }
    try {
        setLoading();

        const res = await axios.put(`/api/members/${member._id}`, member, config);

        dispatch({
            type: UPDATE_MEMBER,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MEMBER_ERROR,
            payload: err.response.statusText
        });

    }

}

//set current member
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//clear current member
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}


//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


//Filter Member
export const filterMembers = text => {
    return ({ type: FILTER_MEMBERS, payload: text });
};

//Clear Filter Member
export const clearFilter = () => {
    return ({ type: CLEAR_FILTER });
};


//Clear Error
export const clearErrors = () => {
    return ({ type: CLEAR_ERRORS });
};
