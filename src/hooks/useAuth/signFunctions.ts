import { toast } from 'react-toastify';

import { api } from 'services/api';
import { i18n } from 'translate/i18n';
import toastError from 'utils/toastError';

type SignInType = {
  email: string;
  password: string;
};

type SignUpType = SignInType & {
  name: string;
};

type ChangePasswordType = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

const HandleSignUp = async (userData: SignUpType) => {
  try {
    await api.post('/auth/signup', userData);
  } catch (err) {
    toastError(err);
    throw new Error(err.message);
  }
  toast.success(i18n.t('signup.toasts.success'));
};

const HandleLogin = async (userData: SignInType) => {
  try {
    const {
      data: { token, user },
      status,
    } = await api.post('/auth/login', userData);
    console.log({ token, user, status });
  } catch (err) {
    toastError(err);
    throw new Error(err.message);
  }
  toast.success(i18n.t('auth.toasts.success'));
};

const HandleLogout = async () => {
  console.log('🚀 ~ file: signFunctions.ts:53 ~ HandleLogout');
  // setLoading(true);

  // try {
  //   await api.delete('/auth/logout');
  //   setIsAuth(false);
  //   setUser({});
  //   localStorage.removeItem('token');
  //   api.defaults.headers.common['Authorization'] = '';
  //   setLoading(false);
  //   useNavigate()('/login');
  // } catch (err) {
  //   toastError(err);
  //   setLoading(false);
  // }
};

const HandleChangePassword = async (userData: ChangePasswordType) => {
  console.log(userData);

  try {
    await api.post('/changePassword/login', userData);
    toast.success(i18n.t('changePassword.toasts.success'));
  } catch (err) {
    toastError(err);
    throw new Error(err.message);
  }
  return true; // success
};

export default { HandleSignUp, HandleLogin, HandleLogout, HandleChangePassword };
