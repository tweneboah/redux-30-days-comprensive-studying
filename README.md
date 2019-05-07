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

# REDUX-FORM
# REDUX-FORM
***
```
import { Field, reduxForm } from 'redux-form';
```
##  **ReduxForm**
* _**ReduxForm**_ works like connect function. We use _**ReduxForm**_ to wrap/bind the component which has the form 
```javascript
export default reduxForm({
    form: 'RegistrationForm'
}) (Form);
```
After binding it to the component, it's a lot of methods and properties to that component, this means the component is now a high order component because it has a lot of functions provided by the redux-form. At this point you can **console.log(this.props)** and you will see all the methods

* The redux-form function accept objects. You pass in the name of the form or validation to it
```javascript
export default reduxForm({
    form:'RegistrationForm'
}) (Form);
```
##  **Field**
*  The Field component is much more powerful.
*  Each Field represent one input field and within that Field there are many functions provided by redux-form so if I have 3 inputs it means i will have 3 Fields.

```javascript
 <Field
        label='Categories'
        name='categories'
        component={this.renderField}
  />
```
### Properties and methods props we can pass to each Field
1. _** name = 'title'**_ The title holds the state or the value from the field the user enters
2. _**component={}**_ : 
* This component receives a callback function and this function will render the form field onto the screen.
* This callback function determines the type of the field either 'checkbox', 'text'
* The callback accept an argument and that add more functions to that particular input field
```javascript
renderField =(field) => {
    console.log(field)

   return (
       <div className='form-group'>
          <label>{field.label}</label>
           <input className='form-control'
            type='text'
            {...field.input} //This pull all the functions to this field
           />
       </div>
   )
}

```

## EXTRACTING THE VALUES FROM THE FIELD
1. Form submission is handle by redux-for, all what we have to do is to pass a callback function to that.
2. Within the callback function we pass in an argument and that argument represent the values from the field

```javascript
onSubmitValues (values) {
    console.log(values)
   
}
```

## OVERALL CODE
```javascript
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Form extends Component {
    
renderField =(field) => {
    console.log(field)

   return (
       <div className='form-group'>
          <label>{field.label}</label>
           <input className='form-control'
            type='text'
            {...field.input}
           />
       </div>
   )
}

//Consuming the values from the form
onSubmitValues (values) {
    console.log(values)
   
}

    render() { 
       
        //destructuring handlesubmit from this.props
       const {handleSubmit} = this.props
       
        return ( 
            <form onSubmit={this.props.handleSubmit(this.onSubmitValues.bind(this))}>
              <h1>Registration form</h1>
                <Field
                label='Title'
                name='title'
                component={this.renderField}
                />

               <Field
               label='Categories'
                name='categories'
                component={this.renderField}
                />

               <Field
               label='Content'
                name='content'
                component={this.renderField}
                />

                <button className='btn btn-primary'> Submit</button>
            </form>
         );
    }
}
 
export default reduxForm({
    form:'RegistrationForm'
}) (Form);
```