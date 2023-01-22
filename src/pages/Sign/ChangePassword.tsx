import React from 'react';
import { useFormik } from 'formik';
import useAuth from 'hooks/useAuth';
import { i18n } from 'translate/i18n';
import { marginTop } from 'utils/functions/BrowserInfo';
import { changePasswordSchema as validationSchema } from 'validations';

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

type ChangePasswordType = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

const ChangePassword = () => {
  const { HandleChangePassword } = useAuth();

  const initialValues: ChangePasswordType = {
    email: '',
    oldPassword: '',
    newPassword: '',
  };

  const initialData: BooleanElements = {
    showOldPassword: false,
    showNewPassword: false,
  };

  // const [formValues, setFormValues] = React.useState<ChangePasswordType>(initialValues);
  const [data, setData] = React.useState<BooleanElements>(initialData);

  const handleShowOldPassword = () => {
    setData({ showOldPassword: !data.showOldPassword, showNewPassword: data.showNewPassword });
  };

  const handleShowNewPassword = () => {
    setData({ showNewPassword: !data.showNewPassword, showOldPassword: data.showOldPassword });
  };

  const { handleSubmit, resetForm, handleChange, values, isSubmitting, touched, errors } =
    useFormik<ChangePasswordType>({
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        setTimeout(async () => {
          setSubmitting(false);
          const changePasswordStatus = await HandleChangePassword(values);
          console.log('🚀 changePasswordStatus', changePasswordStatus);
          console.log('🚀 changePasswordStatus', values);
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
            m: 2,
            bgcolor: 'primary.dark',
            width: 80,
            height: 80,
          }}
        >
          <PersonAddAltRounded fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n.t('changePassword.title')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextFieldInput
            margin="dense"
            fullWidth
            autoComplete="email"
            autoFocus
            id="email"
            name="email"
            label={i18n.t('changePassword.form.email')}
            value={values.email.trim()}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextFieldInput
            margin="dense"
            fullWidth
            id="oldPassword"
            name="oldPassword"
            autoComplete="current-password"
            label={i18n.t('changePassword.form.oldPassword')}
            type={data.showOldPassword ? 'text' : 'password'}
            value={values.oldPassword.trim()}
            onChange={handleChange}
            error={touched.oldPassword && Boolean(errors.oldPassword)}
            helperText={touched.oldPassword && errors.oldPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowOldPassword}>
                    {data.showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextFieldInput
            margin="dense"
            fullWidth
            id="newPassword"
            name="newPassword"
            autoComplete="current-password"
            label={i18n.t('changePassword.form.newPassword')}
            type={data.showNewPassword ? 'text' : 'password'}
            value={values.newPassword.trim()}
            onChange={handleChange}
            error={touched.newPassword && Boolean(errors.newPassword)}
            helperText={touched.newPassword && errors.newPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowNewPassword}>
                    {data.showNewPassword ? <VisibilityOff /> : <Visibility />}
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
            children={i18n.t('changePassword.buttons.submit')}
          />

          <Grid container>
            <Grid item xs>
              <ComponentLink to="/" text={i18n.t('changePassword.links.login')} />
            </Grid>
            <Grid item>
              <ComponentLink
                to="/forgot-password"
                text={i18n.t('changePassword.links.forgotPassword')}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default ChangePassword;
