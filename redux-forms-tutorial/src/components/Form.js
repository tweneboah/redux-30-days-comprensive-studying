import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import myAction from '../actions/createPostAction'



class Form extends Component {
    
renderField =(field) => {
    // console.log(field)

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

//
onSubmitValues (values) {
    // console.log(values)
    this.props.myAction(values)
   
}

    render() { 
       console.log(this.props)
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
 
//connecting form to componenet and configure it
//We pass in the name of the form. The form attribute is mandatory

// After connecting the form to the form component, it's automatically injected bunch of methods and properties on the form component. You can verify this by consologing this.props

//<Field/> component is much more powerful.


//The <Field/> component connects each input to the store
//Field is a component by default created by redux-form
//We pass the following props to the field component:
//name ='title' -> This describes the state/input field the user is editing or typing 
//component ={}, this takes in a function or another component that will use to display this field or that returns some amount of jsx


//The field component don't know to show itself to the screen, it only know how to interact with redux form but the component on the form help to display  it onto the screen.

//Creating a function that will pass to the component prop in the Field

//1. This returns jsx
//we pass in an argumement like field and this field argumemnt contains a lot of functions and properties pertaining to the particular Field. When console log field you will observe that it has bunch of methods and properties so all what we have to do is to get all the methods to that input field by doing this {...field.input}. You can also console log {...field.input} and you will see all the functions on that field

//FORM SUBMISSION
// It's our responsible to take the values from the form and do whatever we want from it

//We have to create our own function and pass it to the handleSubmit from redux. This handleSubmit from redux will take care of our function or handleSubmit receives a function as an arguement

export default reduxForm( {form:'RegistrationForm'}) (
    connect(null, {myAction}) (Form)
     
     );