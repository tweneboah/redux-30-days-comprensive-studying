import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik';



function App({values, errors, touched, isSubmitting}) {
    //This values contains all the values from the inputs. We can use this to render data from the input
    
    return (
      <Form >
        <h1>Formik</h1>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field  type='email'  name='email' placeholder='Email'/>
        </div>
        <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password'  name='password' placeholder='Password'/>
        
        </div>
           
              
              <label>
                <Field type='checkbox'  name='newsletter' checked = {values.newsletter}/>
                 Join our Newsletter
            </label>

            <Field  component='select' name='plan'>
              <option value='free'> Free</option>
              <option value='premium'> premium</option>
  
            </Field>
                    <button disabled={isSubmitting} type=''>Submit</button>
      </Form>
    );
  }

  const FormikApp = withFormik({
     //Creating initial values
     mapPropsToValues({email, password, newsletter, plan}) {
         //You can destructure all the props thus all the props pass in
         //mapPropsToValues accepts argument and this represent all the props we pass to this HOC
         console.log('Map', email)
         return {
           //input names// These are the props we are passing to our component so we have to use the functions formik gave us. Go to the app and destructure. The values props gives the values from the field
           email: email || '',
           password: password || '',
           newsletter: newsletter || true,
           plan: plan || 'free'
         }
     },
      //VALIDATION
      validationSchema:Yup.object().shape({
        email: Yup.string().email('Email not valid').required('required'),
        password: Yup.string('password must be 9 or long').min(9).required('required')
      }),
     //Creating handlesubmit
     //The argument contains all our input values
     handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
         //we can make request from here or calling action from redux
        console.log(values)
        //disabling submit button for async call we use setSubmitting

        setTimeout(()=> {
           if(values.email ==='atom@gmail.com'){
              setErrors({email:'Email aready taken' })
           }else {
             resetForm()
           }
          
        }, 2000)
     }
    
  })(App)








ReactDOM.render(<FormikApp  email=''/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import * as serviceWorker from './serviceWorker';
// import { withFormik } from 'formik';
// import Yup from 'yup';


// function App({values, handleChange, handleSubmit}) {
//     //This values contains all the values from the inputs. We can use this to render data from the input
//     console.log(values)
//     return (
//       <form onSubmit={handleSubmit} className="App">
//         <h1>Formik</h1>
//         <input 
//         type='email' 
//         name='email' 
//         placeholder='Email'
//         value={values.email}
//         onChange={handleChange}
//         />

// <input 
//         type='password' 
//         name='password' 
//         placeholder='Password'
//         value={values.password}
//         onChange={handleChange}
//         />
//         <button>Submit</button>
//       </form>
//     );
//   }

//   const FormikApp = withFormik({
//      //Creating initial values
//      mapPropsToValues({email, password}) {
//          //You can destructure all the props thus all the props pass in
//          //mapPropsToValues accepts argument and this represent all the props we pass to this HOC
//          console.log('Map', email)
//          return {
//            //input names// These are the props we are passing to our component so we have to use the functions formik gave us. Go to the app and destructure. The values props gives the values from the field
//            email: email || '',
//            password: password || '' 
//          }
//      },
//      //Creating handlesubmit
//      //The argument contains all our input values
//      handleSubmit(values) {
//          //we can make request from here or calling action from redux
//         console.log(values)
//      }
//   })(App)








// ReactDOM.render(<FormikApp  email='atom@gmail.com'/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
