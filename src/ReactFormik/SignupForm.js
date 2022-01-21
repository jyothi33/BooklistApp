import React from 'react'
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length > 5) {
      errors.firstname = 'Must be 15 characters or less';
    }
  
    if (!values.lastname) {
      errors.lastname = 'Required';
    } else if (values.lastname.length > 2) {
      errors.lastname = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  const onSubmit = values =>  console.log(values);

  const initialValues = {
    email:'',
    firstname:'react2',
    lastname:''
  }

    const SignupForm = () => {


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <form onSubmit={formik.handleSubmit}> 
            <label>
                Enter Firstname
            </label>
            <br></br>
            <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} id="firstname" name="firstname" value={formik.values.firstname}></input>
            <br></br>
            {formik.touched.firstname && formik.errors.firstname && <div>{formik.errors.firstname}</div>}
            <br></br>
            <label>
                Enter Lastname
            </label>
            <br></br>
            <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} id="lastname" name="lastname" value={formik.values.lastname}></input>
            <br></br>
            {formik.touched.lastname && formik.errors.lastname && <div>{formik.errors.lastname}</div>}
            <br></br>
            <label>Enter Email Address</label>
            <br></br>
            <input type="email" id="email" name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            ></input>
            <br></br>
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <button type='submit'>Submit</button>
        </form>
    )
}

export default SignupForm
