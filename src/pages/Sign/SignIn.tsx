import React from 'react';
// import { Formik, Form, Field } from 'formik';
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
import { i18n } from 'translate/i18n';

import { marginTop } from 'utils/functions/BrowserInfo';

import useAuth from 'hooks/useAuth';

const SignIn = () => {
  const { handleLogin } = useAuth();
  const [values, setValues] = React.useState<{ showPassword: boolean }>({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginStatus = await handleLogin(data);
    console.log(loginStatus);
  };

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
            width: 70,
            height: 70,
          }}
        >
          {/*change 'AccountCircle' to personal avatar*/}
          {2 > 3 ? <AccountCircle /> : null}
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n.t('login.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextFieldInput
            id="email"
            name="email"
            required
            margin="dense"
            autoComplete="email"
            label={i18n.t('login.form.email')}
            // helperText={values.showPassword ? i18n.t('login.toasts.error.email') : null}
            // error={values.showPassword}
          />
          <TextFieldInput
            id="password"
            name="password"
            required
            margin="dense"
            autoComplete="current-password"
            type={values.showPassword ? 'text' : 'password'}
            label={i18n.t('login.form.password')}
            // helperText={i18n.t('login.toasts.error.password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
            type="submit"
            loading={false}
            fullWidth
            variant="contained"
            disabled={false}
            sx={{ mt: 1, mb: 1 }}
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
