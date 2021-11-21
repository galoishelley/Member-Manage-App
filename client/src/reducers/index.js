import { combineReducers } from 'redux';
import authReducer from './authReducer';
import memberReducer from './memberReducer';
import alertReducer from './alertReducer';
import mbrewardReducer from './mbrewardReducer';

import rewardReducer from './rewardReducer';

export default combineReducers({
    auth: authReducer,
    member: memberReducer,
    reward: rewardReducer,
    alert: alertReducer,
    mbreward: mbrewardReducer
});