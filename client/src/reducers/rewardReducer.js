import { GET_REWARDS, ADD_REWARD, UPDATE_REWARD, DELETE_REWARD, FILTER_REWARDS, REWARD_ERROR, CLEAR_FILTER, SET_CURRENT, CLEAR_CURRENT, SET_LOADING } from '../actions/types.js';

const initialState = {
    rewards: [],
    current: null,
    filtered: null,
    loading: false,
    error: null
};

const rewardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REWARDS:
            return {
                ...state,
                rewards: action.payload,
                loading: false
            };
        case ADD_REWARD:
            return {
                ...state,
                rewards: [...state.rewards, action.payload],
                loading: false
            };
        case DELETE_REWARD:
            return {
                ...state,
                rewards: state.rewards.filter(reward => reward._id !== action.payload),
                loading: false
            }
        case UPDATE_REWARD:
            return {
                ...state,
                rewards: state.rewards.map(reward => reward._id === action.payload._id ? action.payload : reward)
            }
        // case SEARCH_LOGS:
        //     return{
        //         ...state,
        //         logs: action.payload
        //     }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        // case CLEAR_CURRENT:
        //     return{
        //         ...state,
        //         current: null
        //     }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case REWARD_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case FILTER_REWARDS:
            console.log(action.payload)
            return {
                ...state,
                filtered: state.rewards.filter(reward => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return reward.name.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
};


export default rewardReducer;