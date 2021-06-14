import React, { FC, ReactElement ,useState} from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import PageTitle from "../components/PageTitle";
import Box from '@material-ui/core/Box';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import Adddata from './Adddata';
// constants
import { APP_TITLE, PAGE_TITLE_CODE } from '../utils/constants';
import { Button ,TextField,Grid} from '@material-ui/core';
// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
           maxWidth: '450px',
           display: 'block',
           background: '#fafafa',
           margin: '0 auto',
           borderRadius: 10,
    borderWidth: 1,
    padding: '2%',
       },
       textField: {
           '& > *': {
               width: '100%',
               color:'white',
           },
       },
       submitButton: {
           marginTop: '24px',
       },
       title: { textAlign: 'center',
     color:'black' },
       successMessage: { color: 'green' },
       errorMessage: { color: 'red' },
   })
);
interface ISignUpForm {
   fullName: string
   password: string
   confirmPassword: string
   email: string
}

interface IFormStatus {
   message: string
   type: string
}

interface IFormStatusProps {
   [key: string]: IFormStatus
}
interface Ivaluesfirebase{
  fullName: string
  password: string
  confirmPassword: string
  email: string
}

const formStatusProps: IFormStatusProps = {
   success: {
       message: 'Signed up successfully.',
       type: 'success',
   },
   duplicate: {
       message: 'Email-id already exist. Please use different email-id.',
       type: 'error',
   },
   error: {
       message: 'Something went wrong. Please try again.',
       type: 'error',
   },
}

const Contactme: FC<{}> = (): ReactElement => {
    const classes = useStyles();


   const [displayFormStatus, setDisplayFormStatus] = useState(false)
   const [formStatus, setFormStatus] = useState<IFormStatus>({
       message: '',
       type: '',
   })

   const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
       try {
           // API call integration will be here. Handle success / error response accordingly.
           if (data) {

               setFormStatus(formStatusProps.success)
               resetForm({})
           }
       } catch (error) {
           const response = error.response
           if (
               response.data === 'user already exist' &&
               response.status === 400
           ) {
               setFormStatus(formStatusProps.duplicate)
           } else {
               setFormStatus(formStatusProps.error)
           }
       } finally {
           setDisplayFormStatus(true)
       }

   }




    return (

      <>


      <div className={classes.root}>
           <Formik
               initialValues={{
                   fullName: '',
                   password: '',
                   confirmPassword: '',
                   email: '',
               }}

               onSubmit={(values: ISignUpForm, actions) => {
                 console.log(values)
                // nameref.set(values)


                  //Adddata(values);
                   createNewUser(values, actions.resetForm)
                   setTimeout(() => {
                       actions.setSubmitting(false)
                   }, 500)
               }}
               validationSchema={Yup.object().shape({
                   email: Yup.string()
                       .email()
                       .required('Enter valid email-id'),
                   fullName: Yup.string().required('Please enter full name'),
                   password: Yup.string()
                       .matches(
                           /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                       )
                       .required(
                           'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                       ),
                   confirmPassword: Yup.string()
                       .required('Required')
                       .test(
                           'password-match',
                           'Password musth match',
                           function (value) {
                               return this.parent.password === value
                           }
                       ),
               })}
           >
               {(props: FormikProps<ISignUpForm>) => {
                   const {
                       values,
                       touched,
                       errors,
                       handleBlur,
                       handleChange,
                       isSubmitting,
                   } = props
                   return (
                       <Form>
                           <h1 className={classes.title}>Conact Me</h1>
                           <Grid
                               container
                               justify="space-around"
                               direction="row"
                           >
                               <Grid
                                   item
                                   lg={10}
                                   md={10}
                                   sm={10}
                                   xs={10}
                                   className={classes.textField}
                               >
                                   <TextField
                                       name="fullName"
                                       id="fullName"
                                       label="Full Name"
                                       value={values.fullName}
                                       type="text"
                                       helperText={
                                           errors.fullName && touched.fullName
                                               ? errors.fullName
                                               : 'Enter your full name.'
                                       }
                                       error={
                                           errors.fullName && touched.fullName
                                               ? true
                                               : false
                                       }
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                   />
                               </Grid>
                               <Grid
                                   item
                                   lg={10}
                                   md={10}
                                   sm={10}
                                   xs={10}
                                   className={classes.textField}
                               >
                                   <TextField
                                       name="password"
                                       id="password"
                                       label="Password"
                                       value={values.password}
                                       type="password"
                                       helperText={
                                           errors.password && touched.password
                                               ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                               : 'One uppercase, one lowercase, one special character and no spaces'
                                       }
                                       error={
                                           errors.password && touched.password
                                               ? true
                                               : false
                                       }
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                   />
                               </Grid>
                               <Grid
                                   item
                                   lg={10}
                                   md={10}
                                   sm={10}
                                   xs={10}
                                   className={classes.textField}
                               >
                                   <TextField
                                       name="confirmPassword"
                                       id="confirmPassword"
                                       label="Confirm password"
                                       value={values.confirmPassword}
                                       type="password"
                                       helperText={
                                           errors.confirmPassword &&
                                           touched.confirmPassword
                                               ? errors.confirmPassword
                                               : 'Re-enter password to confirm'
                                       }
                                       error={
                                           errors.confirmPassword &&
                                           touched.confirmPassword
                                               ? true
                                               : false
                                       }
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                   />
                               </Grid>
                               <Grid
                                   item
                                   lg={10}
                                   md={10}
                                   sm={10}
                                   xs={10}
                                   className={classes.textField}
                               >
                                   <TextField
                                       name="email"
                                       id="email"
                                       label="Email-id"
                                       value={values.email}
                                       type="email"
                                       helperText={
                                           errors.email && touched.email
                                               ? errors.email
                                               : 'Enter email-id'
                                       }
                                       error={
                                           errors.email && touched.email
                                               ? true
                                               : false
                                       }
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                   />
                               </Grid>
                               <Grid
                                   item
                                   lg={10}
                                   md={10}
                                   sm={10}
                                   xs={10}
                                   className={classes.submitButton}
                               >
                               <Button
                                   type="submit"
                                   variant="contained"
                                   color="secondary"
                                   disabled={isSubmitting}
                               >
                                   Submit
                               </Button>
                               {displayFormStatus && (
                                   <div className="formStatus">


                                       {formStatus.type === 'error' ? (
                                           <p
                                               className={
                                                   classes.errorMessage
                                               }
                                           >
                                               {formStatus.message}
                                           </p>
                                       ) : formStatus.type ===
                                         'success' ? (

                                           <p
                                               className={
                                                   classes.successMessage
                                               }
                                           >
                                               {formStatus.message}
                                           </p>
                                       ) : null}
                                   </div>
                               )}



                               </Grid>
                           </Grid>
                       </Form>
                   )
               }}
           </Formik>
       </div>

        </>
    )
}

export default Contactme;
