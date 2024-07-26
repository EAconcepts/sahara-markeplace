'use client'

import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
  token: string | null;
  user: any | null;
  login: (token: string, user: any) => void;
  logout: () => void;
}
export const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userData =
    typeof window !== "undefined" && localStorage.getItem("user");
  const tkn = typeof window !== "undefined" && localStorage.getItem("token");
  const [token, setToken] = useState(tkn || null);
  const [user, setUser] = useState((userData && JSON.parse(userData)) || null);

  const login = (token: string, user: any) => {
    if (typeof window !== 'undefined') {
      token && localStorage.setItem("token", token );
      setToken(token);
     user && localStorage.setItem("user", user);
      setToken(user);
    }
  };
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      setToken(null);
      localStorage.removeItem("token");
      setToken(null);
    }
  };

  useEffect(() => {
    let userString = localStorage.getItem("user") || null;
    let tkn = localStorage.getItem("token") || null;
    setToken(tkn);
    setUser(userString !== null && JSON.parse(userString));
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () =>useContext(AuthContext)
