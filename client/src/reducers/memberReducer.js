import { GET_MEMBERS, UPDATE_MEMBER, DELETE_MEMBER, SET_LOADING, SET_CURRENT, MEMBER_ERROR, ADD_MEMBER, CLEAR_CURRENT, FILTER_MEMBERS, CLEAR_FILTER } from '../actions/types.js';

const initialState = {
    members: [],
    current: null,
    filtered: null,
    loading: false,
    error: null
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
                loading: false
            };
        case ADD_MEMBER:
            return {
                ...state,
                members: [...state.members, action.payload],
                loading: false
            };
        case DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter(member => member._id !== action.payload),
                loading: false
            }
        case UPDATE_MEMBER:
            return {
                ...state,
                members: state.members.map(member => member._id === action.payload._id ? action.payload : member)
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
        case MEMBER_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case FILTER_MEMBERS:
            console.log(action.payload)
            return {
                ...state,
                filtered: state.members.filter(member => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return member.name.match(regex) || member.email.match(regex) || member.phone.match(regex);
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


export default memberReducer;