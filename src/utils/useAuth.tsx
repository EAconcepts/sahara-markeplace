'use client'

import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
  token: string | null;
  user: any | null;
  userType: string | null
  login: (token: string, user: any) => void;
  logout: () => void;
}
export const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userData =
    typeof window !== "undefined" && localStorage.getItem("user");
  const tkn = typeof window !== "undefined" && localStorage.getItem("token");
  const user_type = typeof window !== "undefined" && localStorage.getItem("userType");
  const [token, setToken] = useState(tkn || null);
  const [user, setUser] = useState((userData && JSON.parse(userData)) || null);
  const [userType, setUserType] = useState<string | null>(user_type || null) 

  const login = (token: string, user: any, userType:string) => {
    if (typeof window !== 'undefined') {
      token && localStorage.setItem("token", token );
      userType && localStorage.setItem("userType", userType );
      setToken(token);
      setUserType(userType);
     user && localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    }
  };
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null)
      setUserType(null)
      localStorage.removeItem("user");
      localStorage.removeItem("userType");
    }
  };

  useEffect(() => {
    let userString = localStorage.getItem("user") || null;
    let tkn = localStorage.getItem("token") || null;
    setToken(tkn);
    setUser(userString !== null && JSON.parse(userString));
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () =>useContext(AuthContext)
