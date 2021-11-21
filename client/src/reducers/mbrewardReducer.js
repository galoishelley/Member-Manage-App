import { ADD_MBREWARD, GET_MBHASREWARD, GET_MBMEMBERS, FILTER_MBREWARDS, DELETE_MBREWARD, SET_LOADING, FILTER_REWARDS, CLEAR_FILTER, SET_CURRENT, CLEAR_CURRENT } from '../actions/types.js';

const initialState = {
    mbrewards: [],
    mbmembers: [], //show in the home pages
    current: null,
    filtered: null,
    loading: false,
    error: null
};

const mbrewardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MBMEMBERS:
            return {
                ...state,
                mbmembers: action.payload,
                loading: false
            }
        case GET_MBHASREWARD:
            return {
                ...state,
                mbrewards: action.payload,
                loading: false
            };
        case ADD_MBREWARD:
            return {
                ...state,
                mbmembers: [...state.mbmembers, action.payload],
                loading: false
            };
        case DELETE_MBREWARD:
            return {
                ...state,
                mbrewards: state.mbrewards.filter(item => item._id !== action.payload),
                loading: false
            }
        // case UPDATE_REWARD:
        //     return {
        //         ...state,
        //         rewards: state.rewards.map(reward => reward._id === action.payload._id ? action.payload : reward)
        //     }
        // // case SEARCH_LOGS:
        // //     return{
        // //         ...state,
        // //         logs: action.payload
        // //     }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        // case REWARD_ERROR:
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         error: action.payload
        //     };
        case FILTER_MBREWARDS:
            return {
                ...state,
                filtered: state.mbrewards.filter(item => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return item.name.match(regex) || item.reward_info[0].name.match(regex);
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


export default mbrewardReducer;