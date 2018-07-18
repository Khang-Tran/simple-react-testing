import {combineReducers} from 'redux';

import CommentReducer from './commentReducer';

export default combineReducers({
    comments: CommentReducer
})