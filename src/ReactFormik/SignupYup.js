import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


// const validate = values => {
//     const errors = {};
//     if (!values.firstname) {
//       errors.firstname = 'Required';
//     } else if (values.firstname.length > 5) {
//       errors.firstname = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastname) {
//       errors.lastname = 'Required';
//     } else if (values.lastname.length > 2) {
//       errors.lastname = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };

  const onSubmit = values =>  console.log(values);

  const initialValues = {
    email:'',
    firstname:'react2',
    lastname:''
  }

    const SignupYup = () => {


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(5, 'Must be 5 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(2, 'Must be 2 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address keyed by user').required('Required'),
          })
    })

    return (
        <form onSubmit={formik.handleSubmit}> 
            <label>
                Enter Firstname
            </label>
            <br></br>
            <input type="text" 
            {...formik.getFieldProps('firstName')} 
            id="firstname" 
            name="firstname" 
            value={formik.values.firstname}></input>
            <br></br>
            {formik.touched.firstname && formik.errors.firstname && <div>{formik.errors.firstname}</div>}
            <br></br>
            <label>
                Enter Lastname
            </label>
            <br></br>
            <input type="text" 
            {...formik.getFieldProps('lastName')}
            id="lastname" name="lastname" 
            value={formik.values.lastname}></input>
            <br></br>
            {formik.touched.lastname && formik.errors.lastname && <div>{formik.errors.lastname}</div>}
            <br></br>
            <label>Enter Email Address</label>
            <br></br>
            <input type="email" id="email" name="email"
            {...formik.getFieldProps('email')}
            value={formik.values.email}
            
            ></input>
            <br></br>
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <button type='submit'>Submit</button>
        </form>
    )
}

export default SignupYup
