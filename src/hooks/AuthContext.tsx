import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  store: object;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

interface AuthState {
  token: string;
  store: object;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@fidegg:token');
    const store = localStorage.getItem('@fidegg:store');

    if(token && store) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, store: JSON.parse(store) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email: email,
      password: password
    });

    const { token, store } = response.data;
    if(token) {
      localStorage.setItem('@fidegg:token', token);
      localStorage.setItem('@fidegg:store', JSON.stringify(store));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({token, store});
      return true;
    }
    return false;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@fidegg:token');
    localStorage.removeItem('@fidegg:store');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{store: data.store, signIn, signOut}} >
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