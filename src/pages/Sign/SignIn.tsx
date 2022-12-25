import React from 'react';
import { useFormik } from 'formik';
import useAuth from 'hooks/useAuth';
import { i18n } from 'translate/i18n';
import { marginTop } from 'utils/functions/BrowserInfo';
import { loginSchema as validationSchema } from 'validations';

import {
  Box,
  Grid,
  Avatar,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Copyright, ComponentLink, TextFieldInput } from 'components';

type SignInType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { handleLogin } = useAuth();

  const initialValues: SignInType = {
    email: '',
    password: '',
  };

  // const [formValues, setFormValues] = React.useState(initialValues);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<SignInType>({
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          const signUpStatus = await handleLogin(values);
          console.log('🚀 signUpStatus', signUpStatus);
          resetForm();
        }, 500);
      },
    });

  const encodedImg =
    'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  const reader = new FileReader();

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
            bgcolor: 'primary.light',
            width: 80,
            height: 80,
          }}
          src={`data:image/png;base64, ${encodedImg}`}
        />
        {/* <AccountCircle />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          {i18n.t('login.title')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextFieldInput
            margin="dense"
            fullWidth
            autoFocus
            id="email"
            name="email"
            autoComplete="email"
            label={i18n.t('login.form.email')}
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
            label={i18n.t('login.form.password')}
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

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <LoadingButton
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            type="submit"
            loading={isSubmitting}
            // disabled={!(isValid && dirty) || values === initialValues}
          >
            {i18n.t('login.buttons.submit')}
          </LoadingButton>

          <Grid container>
            <Grid item xs>
              <ComponentLink to="/forgot-password" text={i18n.t('login.links.forgotPassword')} />
            </Grid>
            <Grid item>
              <ComponentLink to="/signup" text={i18n.t('login.links.register')} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 6, mb: 4 }} />
    </Container>
  );
};

export default SignIn;
