import { stat } from "fs";


const initialState = {
   counter: 0,
   results: [],
   increamentHistory: [],
   decrementHistory: [],
   increaeByFiveHistory: []
}

const reducer = (state= initialState,  action ) =>{
    console.log('action', action)
    switch(action.type){
        case  'INCREMENT':
        return {
            ...state,
            counter: state.counter + action.payload.add,
            increamentHistory: [...state.increamentHistory, action.payload.add]
        }

        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - action.payload.decrementBy,
            decrementHistory: [...state.decrementHistory, action.payload.decrementBy]
            
        }
        case 'INCREASE_BY_5':
        return {
            ...state,
            counter: state.counter + action.payload.increaseBy5,
            increaeByFiveHistory: [...state.increaeByFiveHistory, action.payload.increaseBy5]
        }
        case 'STORE_RESULT':
        return {
            ...state,
            results: state.results.concat(state.counter)
        }
        case 'DISPLAY':
        return [...state, action.payload.add]
        default: 
        return state
    }
    
}

export default reducer