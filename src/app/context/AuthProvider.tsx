import { createContext, useState } from 'react';

export type AuthUserT = {
  email: string;
  // password: string;
  access_token: string;
};

type AuthContextT = {
  auth: AuthUserT | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthUserT | null>>;
  persist: string;
  setPersist: React.Dispatch<React.SetStateAction<string>>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextT>({} as AuthContextT);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthUserT | null>(null);

  const [persist, setPersist] = useState<string>(
    localStorage.getItem('persist') || 'false',
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
