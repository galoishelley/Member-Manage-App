import { GET_MBMEMBERS, GET_MBHASREWARD, UPDATE_MEMBER, DELETE_MBREWARD, FILTER_MBREWARDS, MBREWARD_ERROR, CLEAR_FILTER, SET_CURRENT, CLEAR_CURRENT, SET_LOADING } from './types';
import axios from 'axios';


// get mbreward from server
//get has reward members
export const getMBHasReward = () => async dispatch => {

    try {
        setLoading();

        const res = await axios.get('/api/members');

        dispatch({
            type: GET_MBHASREWARD,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MBREWARD_ERROR,
            payload: err.response.statusText
        });

    }

}


// get filter_members from server
//get no reward members
export const getMbMembers_hasnull = () => async dispatch => {

    try {
        setLoading();

        const res = await axios.get("/api/memb_null");


        dispatch({
            type: GET_MBMEMBERS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MBREWARD_ERROR,
            payload: err.response.statusText
        });

    }

}

// get filter_members from server
//get no reward members
export const getMbMembers_aggregate = () => async dispatch => {

    try {
        setLoading();

        const res = await axios.get("/api/aggregate");

        dispatch({
            type: GET_MBHASREWARD,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MBREWARD_ERROR,
            payload: err.response.statusText
        });

    }

}


//delete mbreward from server
export const deleteMbReward = (id) => async dispatch => {
    try {
        setLoading();
        await axios.delete(`/api/mbrewards/${id}`);

        dispatch({
            type: DELETE_MBREWARD,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: MBREWARD_ERROR,
            payload: err.response.statusText
        });

    }

}

// //update members
// export const addMbReward = mbreward => async dispatch => {
//     const config = {
//         header: {
//             "Content-type": 'application/json'
//         }
//     }

//     try {
//         setLoading();

//         const res = await axios.put('/api/members', mbreward, config);

//         dispatch({
//             type: ADD_MBREWARD,
//             payload: res.data
//         });

//     } catch (err) {
//         dispatch({
//             type: MBREWARD_ERROR,
//             payload: err.response.statusText
//         });

//     }

// }





// //update member's reward_id from server
export const addMbReward = mbreward => async dispatch => {
    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }
    try {
        setLoading();

        const res = await axios.put(`/api/members/${mbreward._id}`, mbreward, config);

        dispatch({
            type: UPDATE_MEMBER,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: MBREWARD_ERROR,
            payload: err.response.statusText
        });

    }

}

//set current mbreward
export const setCurrent = item => {
    return {
        type: SET_CURRENT,
        payload: item
    }
}

//clear current mbreward
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


//Filter mbreward
export const filterRewards = text => {
    return ({ type: FILTER_MBREWARDS, payload: text });
};

//Clear Filter mbreward
export const clearFilter = () => {
    return ({ type: CLEAR_FILTER });
};

