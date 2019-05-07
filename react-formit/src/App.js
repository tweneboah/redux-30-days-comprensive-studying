import React from 'react'
import './App.css'
import {withFormik} from 'formik'
import Yup from 'yup'


function App({ values, handleChange}) {
  console.log()
  return (
    <form className="App">
      <h1>Formik</h1>
      <input type='email' name='email' placeholder='Email' value={values.email}
      onChange={handleChange}
      />

      <input type='password' name='password' placeholder='password' value={values.password}
      onChange={handleChange}
      />
      <button>Summit</button>
    </form>
  );
}


const FormikApp = withFormik({
  mapPropsToValues(props) {
    console.log(props)
    return {
      //Input names
      email: 'twentek@gmail.com',
    }
  }
})

export default(FormikApp) (App)
