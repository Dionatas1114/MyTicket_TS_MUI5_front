import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { Box, TextField, Button } from '@mui/material';

const validationSchema = yup.object().shape({
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
});

const ChangePassword = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(JSON.stringify(values));
        }, 500);
      }}
    >
      {({ values, submitForm, resetForm, isSubmitting, touched, errors }) => (
        <Form>
          <Field
            as={TextField}
            name="email"
            type="email"
            label="Email"
            helperText="Please Enter Email"
          />
          <Field as={TextField} type="password" label="Password" name="password" />
          <Box margin={1}>
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              color="secondary"
              disabled={isSubmitting}
              onClick={() => {
                resetForm();
              }}
            >
              Reset
            </Button>
          </Box>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassword;
