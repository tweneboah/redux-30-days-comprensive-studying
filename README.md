# redux-30-days-comprensive-studying
30 days redux comprehensive studying. By the end of 30 days i will understand the basics of redux

# BOOKS-APP DOCUMENTATION
## DAY 1: Reducers: 
* Reducers are the state of your application
* Reducers are the functions that return a piece of your application states
* Reducers must always return object
* For my books-app, I have two states: 1. A state that displays all the books 2. State that displays only one 
  book, this means I will have two reducers, one for each state

* In our case we have two states therefore we will need two reducers

* Reducers are functions that returns a new state of your application and it accept state and action

### IN OUR CASE ALL THE BOOKS WAS CREATED BY THE REDUCER BELOW
* Reducer can also return an object
```javascript
export default function () {
    return [
        {title: 'Jesus'},
        {title: 'God is coming'},
        {title: 'No Jesus no Heaven 1'},
        {title: 'No Jesus no Heaven 2 ' },
        {title: 'No Jesus no Heaven 3 '}
    ]
}
```

* If there are many reducers we group them using combineReducers from redux === store/state/data

```javascript
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import AuthorReducer from './anotherBook_reducer';


const rootReducer = combineReducers({
    books: BooksReducer,
    author: AuthorReducer
})

export default rootReducer;
```
* NOTE: books 

## ACTIONS

* We use actions to change the state/store/reducers of your application

* Actions can be a user clicking a button 

* Actions always returns an object, and that object is use to change the state of your application.

* Action is mandatory to have action type and a payload

* When actions are trigered it's automatically send to all the reducers and the reducer that meet that action type, it will then change the state of the reducer and all components will re-render to display the current state.

## CREATING A STORE
* A store holds all our reducers/state into one place call store

* For all the components to have access to the state/store we need to wrap the store to the parent component

### HOW TO WRAP STORE TO PARENT COMPONENT

You need the following
1. import createStore, Provider from redux and import combineReducers from it file

* The provider is use to provide all the component with state/store/data

* createStore is use to create the store

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/'


const store = createStore(rootReducer)

ReactDOM.render(
 <Provider store={store}>
<App />

</Provider>, document.getElementById('root'));
```

## HOW CAN A COMPONENT HAVE ACCESS TO THE STORE

We need the do the following
1. Open the component you want connect to the store
2. import connect function from redux
3. Create a  helper function high order component (mapStateToProps)
* The connect function is to connect the store the desire component

## PASING ACTION TO A COMPONENT
1.Just import the action creator and pass it into connect function

## NOTE:
After these all the data/state and actions are now availabe in that component. You can access them through this.props

 ```javascript
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {selectedBook} from '../actions'


class BookList extends Component {
    
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li onClick={()=>this.props.selectedBook(book)} key={book.title}>{book.title}</li>
            )
        })
    }

    render() { 
     console.log('From component', this.props)
        return (
            <ul>
              {this.renderList()}
              <button >click me</button>
            </ul>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        books: state.books   
    }
}
export default connect(mapStateToProps, {selectedBook}) (BookList);
 ```

## DISPATCHING ACTIONS/ CONSUMING ACTIONS IN REDUCERS
1. Create your action.
2. create a component where you want to display this state
3. create a reducer
4. When creating the reducer, we know that state reducer requires state and action. The state you pass to this reducer is not the state of your application so we offten default to null depending on your expectations
4. Wherever the action calls in your application and that action will go through all the reducers automatically and if that reducer meets the action type all the component will re-render and displays the new state.


