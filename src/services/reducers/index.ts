import { combineReducers } from 'redux';
import { skillsReducer } from './skills';
import { userReducer } from './user';

const rootReducer = combineReducers({
    user: userReducer,
    skills: skillsReducer,
});

export default rootReducer;