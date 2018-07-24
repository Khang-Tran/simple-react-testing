import {combineReducers} from 'redux';

import CommentReducer from './commentReducer';
import AuthReducer from './authReducer';

export default combineReducers({
    comments: CommentReducer,
    auth: AuthReducer
});