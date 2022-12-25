import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api, socket } from 'services/api';
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

const useAuth = () => {
  const navigateTo = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setIsAuth(true);
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        const { data } = await api.post('/auth/refresh_token');
        if (data) {
          localStorage.setItem('token', JSON.stringify(data.token));
          api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        }
        return api(originalRequest);
      }
      if (error?.response?.status === 401) {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = '';
        setIsAuth(false);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    (async () => {
      if (token) {
        try {
          const { data } = await api.post('/auth/refresh_token');
          api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          setIsAuth(true);
          setUser(data.user);
        } catch (err) {
          toastError(err);
        }
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    socket.on('user', (data) => {
      // if (data.action === 'update' && data.user.id === user.id) {
      //   setUser(data.user);
      // }
      console.log('TODO');
    });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  const handleSignUp = async (userData: SignUpType) => {
    console.log('🚀 ~ file: index.ts:91 ~ handleSignUp ~ userData', userData);
    try {
      await api.post('/auth/signup', userData);
      toast.success(i18n.t('signup.toasts.success'));
      navigateTo('/login');
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    return true;
  };

  const handleLogin = async (data: SignInType) => {
    console.log(data);

    try {
      await api.post('/auth/login', data);
      toast.success(i18n.t('auth.toasts.success'));
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    return true; // success

    // setLoading(true);

    // try {
    //   const { data } = await api.post('/auth/login', userData);
    //   localStorage.setItem('token', JSON.stringify(data.token));
    //   api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    //   setUser(data.user);
    //   setIsAuth(true);
    //   toast.success(i18n.t('auth.toasts.success'));
    //   navigateTo('/tickets');
    //   setLoading(false);
    // } catch (err) {
    //   toastError(err);
    //   setLoading(false);
    // }
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      await api.delete('/auth/logout');
      setIsAuth(false);
      setUser({});
      localStorage.removeItem('token');
      api.defaults.headers.common['Authorization'] = '';
      setLoading(false);
      navigateTo('/login');
    } catch (err) {
      toastError(err);
      setLoading(false);
    }
  };

  const handleChangePassword = async (data: ChangePasswordType) => {
    console.log(data);

    try {
      await api.post('/changePassword/login', data);
      toast.success(i18n.t('changePassword.toasts.success'));
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    return true; // success
  };

  return { isAuth, user, loading, handleSignUp, handleLogin, handleLogout, handleChangePassword };
};

export default useAuth;
