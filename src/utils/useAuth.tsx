"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

interface AuthProps {
  token: string | null;
  user: any | null;
  userType: string | null;
  login: (token: string, user: any) => void;
  logout: () => void;
  baseUrl: string;
  imgUrl: string;
  vendorRedirect: boolean;
  setVendorRedirect: Dispatch<SetStateAction<boolean>>;
  vendorSub: {
    plan: string;
    duration: string;
  };
  setVendorSub: Dispatch<
    SetStateAction<{
      plan: string;
      duration: string;
    }>
  >;
  showPricing: boolean;
  setShowPricing: Dispatch<SetStateAction<boolean>>;
}
export const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userData =
    typeof window !== "undefined" && localStorage.getItem("user");
  const tkn = typeof window !== "undefined" && localStorage.getItem("token");
  const user_type =
    typeof window !== "undefined" && localStorage.getItem("userType");
  const [token, setToken] = useState(tkn || null);
  const [user, setUser] = useState((userData && JSON.parse(userData)) || null);
  const [userType, setUserType] = useState<string | null>(user_type || null);
  const [vendorRedirect, setVendorRedirect] = useState<boolean>(false);
  const [showPricing, setShowPricing] = useState<boolean>(false);

  const [vendorSub, setVendorSub] = useState({
    plan: "",
    duration: "Monthly",
  });
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  const login = (token: string, user: any, userType: string) => {
    if (typeof window !== "undefined") {
      token && localStorage.setItem("token", token);
      userType && localStorage.setItem("userType", userType);
      setToken(token);
      setUserType(userType);
      user && localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    }
  };
  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setUserType(null);
      localStorage.removeItem("user");
      localStorage.removeItem("userType");
      toast.success("Logout Successful!");
    }
  };

  useEffect(() => {
    let userString = localStorage.getItem("user") || null;
    let tkn = localStorage.getItem("token") || null;
    setToken(tkn);
    setUser(userString !== null && JSON.parse(userString));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        userType,
        baseUrl,
        imgUrl,
        vendorRedirect,
        vendorSub,
        showPricing,
        login,
        logout,
        setVendorRedirect,
        setVendorSub,
        setShowPricing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
