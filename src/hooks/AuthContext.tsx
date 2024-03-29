import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  expiration: string;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

interface AuthState {
  token: string;
  expiration: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@system:token');
    const user = localStorage.getItem('@system:user');
    const expiration = localStorage.getItem('@system:token-expiration');

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, expiration, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email: email,
      password: password
    });

    const { token, expiration, user } = response.data;
    if(token) {
      localStorage.setItem('@system:token', token);
      localStorage.setItem('@system:token-expiration', expiration);
      localStorage.setItem('@system:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({token, expiration, user});
      return true;
    }
    return false;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@system:token');
    localStorage.removeItem('@system:token-expiration');
    localStorage.removeItem('@system:user');
	api.defaults.headers.authorization = null;

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, expiration: data.expiration, signIn, signOut}} >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };