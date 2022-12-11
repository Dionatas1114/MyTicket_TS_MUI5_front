import React from 'react';
// import { Formik, Form, Field } from 'formik';
import {
  Box,
  Grid,
  Avatar,
  Container,
  Typography,
  CssBaseline,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { AccountCircle } from '@mui/icons-material';

import LoadingButton from '@mui/lab/LoadingButton';

import { Copyright, ComponentLink, TextFieldInput } from 'components';
import { i18n } from 'translate/i18n';

import { getRandomNumber } from 'utils/functions/RandomNumber';
import { marginTop } from 'utils/functions/BrowserInfo';

import useAuth from 'hooks/useAuth';

const SignIn = () => {
  const theme = createTheme();
  const { handleLogin } = useAuth();

  const [values, setValues] = React.useState<{ password?: number }>({ password: undefined });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setValues({ password: getRandomNumber(10000000, 90000000) });
    const loginStatus = await handleLogin(data);
    console.log(loginStatus);
  };

  return (
    <ThemeProvider theme={theme}>
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
            {i18n.t('forgotPassword.title')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextFieldInput
              id="email"
              name="email"
              margin="dense"
              required
              fullWidth
              autoComplete="email"
              label={i18n.t('forgotPassword.form.email')}
              // error={values.showPassword}
            />
            <TextField
              id="temporaryPassword"
              name="temporaryPassword"
              margin="dense"
              color="primary"
              fullWidth
              value={values.password || '********'}
              helperText={i18n.t('forgotPassword.form.temporaryPassword')}
            />
            {/* margin-bottom: -14px */}
            <LoadingButton
              type="submit"
              fullWidth
              loading={false}
              variant="contained"
              disabled={false}
              sx={{ mt: 1, mb: 1 }}
            >
              {i18n.t('forgotPassword.buttons.submit')}
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <ComponentLink to="/" text={i18n.t('forgotPassword.links.login')} />
              </Grid>
              <Grid item>
                <ComponentLink to="/signup" text={i18n.t('forgotPassword.links.register')} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 6, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
