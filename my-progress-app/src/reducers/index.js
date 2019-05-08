import {combineReducers} from 'redux';

import countReducer from './reducer'

const rootReducer = combineReducers({
  
    counter: countReducer

})

export default rootReducer