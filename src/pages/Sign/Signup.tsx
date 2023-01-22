import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import useAuth from 'hooks/useAuth';
import { i18n } from 'translate/i18n';
import { marginTop } from 'utils/functions/BrowserInfo';
import { signUpSchema as validationSchema } from 'validations';

import {
  Box,
  Grid,
  Avatar,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  InputAdornment,
} from '@mui/material';

import { PersonAddAltRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import { Copyright, ComponentLink, TextFieldInput } from 'components';

type SignUpType = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const navigateTo = useNavigate();
  const { HandleSignUp } = useAuth();

  const initialValues: SignUpType = {
    name: '',
    email: '',
    password: '',
  };

  // const [formValues, setFormValues] = React.useState(initialValues);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<SignUpType>({
      initialValues,
      validationSchema,
      onSubmit: ({ name, ...rest }, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          const values = { name: name.trim(), ...rest };
          await HandleSignUp(values);
          resetForm();
          navigateTo('/login');
        }, 500);
      },
    });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 2,
            bgcolor: 'primary.dark',
            width: 80,
            height: 80,
          }}
        >
          <PersonAddAltRounded fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n.t('signup.title')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextFieldInput
            margin="dense"
            fullWidth
            autoFocus
            id="name"
            name="name"
            autoComplete="name"
            label={i18n.t('signup.form.name')}
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextFieldInput
            margin="dense"
            fullWidth
            autoComplete="email"
            id="email"
            name="email"
            label={i18n.t('signup.form.email')}
            value={values.email.trim()}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextFieldInput
            margin="dense"
            fullWidth
            id="password"
            name="password"
            autoComplete="current-password"
            label={i18n.t('signup.form.password')}
            type={showPassword ? 'text' : 'password'}
            value={values.password.trim()}
            onChange={handleChange}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            type="submit"
            loading={isSubmitting}
            children={i18n.t('signup.buttons.submit')}
          />

          <Grid container>
            <Grid item xs>
              <ComponentLink to="/forgot-password" text={i18n.t('signup.links.forgotPassword')} />
            </Grid>
            <Grid item>
              <ComponentLink to="/" text={i18n.t('signup.links.login')} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default SignUp;
