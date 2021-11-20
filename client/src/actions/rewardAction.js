import { GET_REWARDS, ADD_REWARD, UPDATE_REWARD, DELETE_REWARD, FILTER_REWARDS, REWARD_ERROR, CLEAR_FILTER, SET_CURRENT, CLEAR_CURRENT, SET_LOADING } from './types';
import axios from 'axios';

//delete reward from server
export const deleteReward = (id) => async dispatch => {
    try {
        setLoading();

        console.log("id");
        console.log(id);

        await axios.delete(`/api/rewards/${id}`);

        dispatch({
            type: DELETE_REWARD,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: REWARD_ERROR,
            payload: err.response.statusText
        });

    }

}

//add new reward
export const addReward = reward => async dispatch => {
    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }

    try {
        setLoading();

        const res = await axios.post('/api/rewards', reward, config);

        dispatch({
            type: ADD_REWARD,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: REWARD_ERROR,
            payload: err.response.statusText
        });

    }

}


// get reward from server
export const getRewards = () => async dispatch => {

    try {
        setLoading();

        const res = await axios.get('/api/rewards');

        dispatch({
            type: GET_REWARDS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: REWARD_ERROR,
            payload: err.response.statusText
        });

    }

}


//update reward from server
export const updateReward = reward => async dispatch => {
    const config = {
        header: {
            "Content-type": 'application/json'
        }
    }
    try {
        setLoading();

        const res = await axios.put(`/api/rewards/${reward._id}`, reward, config);

        dispatch({
            type: UPDATE_REWARD,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: REWARD_ERROR,
            payload: err.response.statusText
        });

    }

}

//set current reward
export const setCurrent = item => {
    return {
        type: SET_CURRENT,
        payload: item
    }
}

//clear current reward
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


//Filter reward
export const filterRewards = text => {
    return ({ type: FILTER_REWARDS, payload: text });
};

//Clear Filter reward
export const clearFilter = () => {
    return ({ type: CLEAR_FILTER });
};

