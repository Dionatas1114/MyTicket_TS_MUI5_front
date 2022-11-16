import React from 'react';

import {
  Box,
  Grid,
  Avatar,
  TextField,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  InputAdornment,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Copyright, ComponentLink } from 'components';
import { i18n } from 'translate/i18n';
import { api } from '../../services/api';

const theme = createTheme();

const SignIn = () => {
  const [values, setValues] = React.useState<{ showPassword: boolean }>({ showPassword: false });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(userData);

    try {
      await api.post('/auth/login', userData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'primary.light',
              width: 60,
              height: 60,
            }}
          >
            {/*change 'AccountCircle' to personal avatar*/}
            {2 > 3 ? <AccountCircle /> : null}
          </Avatar>
          <Typography component="h1" variant="h5">
            {i18n.t('login.title')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label={i18n.t('login.form.email')}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label={i18n.t('login.form.password')}
              type={values.showPassword ? 'text' : 'password'}
              autoComplete="current-password"
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
            <LoadingButton
              type="submit"
              loading={false}
              fullWidth
              variant="contained"
              disabled={false}
              sx={{ mt: 2, mb: 2 }}
            >
              {i18n.t('login.buttons.submit')}
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                {/* <ComponentLink to="/" text="Forgot password?" /> */}
              </Grid>
              <Grid item>
                <ComponentLink to="/signup" text={i18n.t('login.buttons.register')} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
