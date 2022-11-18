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

import { PersonAddAltRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

import { Copyright, ComponentLink } from 'components';
import { i18n } from 'translate/i18n';

const theme = createTheme();

const SignUp = () => {
  const [values, setValues] = React.useState<{ showPassword: boolean }>({
    showPassword: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'primary.dark',
              width: 60,
              height: 60,
            }}
          >
            <PersonAddAltRounded fontSize="medium" />
          </Avatar>
          <Typography component="h1" variant="h5">
            {i18n.t('signup.title')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label={i18n.t('signup.form.name')}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label={i18n.t('signup.form.email')}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label={i18n.t('signup.form.password')}
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
              {i18n.t('signup.buttons.submit')}
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                {/* <ComponentLink to="/" text="Forgot password?" /> */}
              </Grid>
              <Grid item>
                <ComponentLink to="/" text={i18n.t('signup.buttons.login')} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
