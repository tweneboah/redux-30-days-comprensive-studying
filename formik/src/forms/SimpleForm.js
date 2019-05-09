import React, { Component } from 'react';
import {Formik, withFormik } from 'formik';
import * as Yup from 'yup';
import Error from './Error'


const formikWrapper = withFormik({
    mapPropsToValues: () => {
       return {
        username: '',
        email: '',
        topics: []
       }
    },

    handleSubmit: ((values, {setSubmittinh}) => {
        return console.log(values.email)
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter username'),
        email: Yup.string().email('Enter valid email').required('email required')
    })
})


const SimpleForm = (props) => {
    

    //Destructuring the props values
    const { values, handleChange, handleBlur, setFieldValue, setTouchedValue, handleSubmit} = props
 
    return (
        <form onSubmit = {handleSubmit}>
             
             <div>
             <input
              value= {values.username} 
              type='text' 
              name='username'
              placeholder='Username' 
              onChange={handleChange}
               onBlur={handleBlur}
              
              
                />
                 <Error component ={Error} name='username'/>
                </div>

                <div>
             <input
              value ={values.email} 
              type='email' 
              name='email'
              placeholder='email'
               onChange={handleChange}
               onBlur ={handleBlur}
                />
                 <Error component ={Error} name='email'/>

                 </div>
            <button type='submit'>Submit</button>

           
        </form>
    )
}

const EnhancedForm = formikWrapper(SimpleForm)

export default EnhancedForm