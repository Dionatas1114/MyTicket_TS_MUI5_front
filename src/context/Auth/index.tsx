import React, { createContext } from 'react';

import useAuth from '../../hooks/useAuth';

interface User {
  id?: any;
  name?: any;
  email?: any;
  customer?: any;
}

interface AuthProps {
  token: string | undefined;
  setToken: React.Dispatch<string>;
  user?: User;
}

const DEFAULT_VALUE: AuthProps = {
  token: undefined,
  setToken: () => {},
};

const AuthContext = createContext(DEFAULT_VALUE);

const AuthProvider = (children: React.ReactNode) => {
  const [token, setToken] = React.useState(DEFAULT_VALUE.token);
  // const { loading, user, isAuth, handleLogin, handleLogout } = useAuth();

  // return (
  //   <AuthContext.Provider
  //     value={{ loading, user, isAuth, handleLogin, handleLogout }}
  //   >
  //     {children}
  //   </AuthContext.Provider>
  // );
};

export { AuthContext, AuthProvider };
