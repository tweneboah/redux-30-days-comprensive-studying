import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import post from './formReducer';


const rootReducer = combineReducers({
    form: formReducer,
    post: post
})

export default rootReducer;