import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import useAuth from 'hooks/useAuth';
import { i18n } from 'translate/i18n';
import { marginTop } from 'utils/functions/BrowserInfo';
import { getRandomNumber } from 'utils/functions/RandomNumber';
import { forgotPasswordSchema as validationSchema } from 'validations';

import {
  Box,
  Grid,
  Avatar,
  Container,
  Typography,
  CssBaseline,
  IconButton,
  InputAdornment,
} from '@mui/material';

import { PrivacyTipRounded, ContentCopy } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Copyright, ComponentLink, TextFieldInput } from 'components';

type ForgotPasswordType = {
  email: string;
  temporaryPassword: string;
};

const ForgotPassword = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const initialValues: ForgotPasswordType = {
    email: '',
    temporaryPassword: '',
  };

  const [temporaryPassword, setTemporaryPassword] = React.useState<string>(
    initialValues.temporaryPassword
  );

  const handleCopyPassword = () => {
    setTimeout(() => {
      navigator.clipboard.writeText(temporaryPassword);
      navigate('/change-password');
    }, 1000);
  };

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<ForgotPasswordType>({
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          setTemporaryPassword(getRandomNumber(10000000, 90000000).toString());
          // const signUpStatus = await handleSignUp(values);
          // console.log('🚀 signUpStatus', signUpStatus);
          resetForm();
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
            m: 1,
            bgcolor: 'primary.dark',
            width: 80,
            height: 80,
          }}
        >
          <PrivacyTipRounded fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n.t('forgotPassword.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextFieldInput
            margin="dense"
            fullWidth
            autoFocus
            id="email"
            name="email"
            autoComplete="email"
            label={i18n.t('forgotPassword.form.email')}
            value={values.email.trim()}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextFieldInput
            margin="dense"
            fullWidth
            id="temporaryPassword"
            name="temporaryPassword"
            color="primary"
            value={temporaryPassword || '********'}
            disabled={Boolean(temporaryPassword)}
            helperText={i18n.t('forgotPassword.form.temporaryPassword').toString()}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopyPassword}>
                    {Boolean(temporaryPassword) ? <ContentCopy /> : null}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* margin-bottom: -14px */}
          <LoadingButton
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            type="submit"
            loading={isSubmitting}
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
  );
};

export default ForgotPassword;
