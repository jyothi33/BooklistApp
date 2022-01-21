import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

  const onSubmit = values =>  console.log(values);

  const initialValues = {
    email:'',
    firstname:'react2',
    lastname:''
  }

    const SignupFormikComponent = () => {

    return (
        <Formik
       initialValues={{ firstname: '', lastname: '', email: '' }}
       validationSchema={Yup.object({
         firstname: Yup.string()
           .max(5, 'Must be 5 characters or less')
           .required('Required'),
         lastname: Yup.string()
           .max(2, 'Must be 2 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >

       {formik => ( <Form>
         <label htmlFor="firstname">First Name</label>
         <Field name="firstname" type="text" />
         <ErrorMessage name="firstname" />
        <br></br>
         <label htmlFor="lastname">Last Name</label>
         <Field name="lastname" type="text" />
         <ErrorMessage name="lastname" />
            <br></br>
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
 <br></br>
         <button type="submit">Submit</button>
       </Form> )}
        </Formik>
    )
}

export default SignupFormikComponent
