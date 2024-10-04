import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./useAuth";

const CheckoutContext = createContext<any>(undefined);
export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuth();
  const [shippingInfo, setShippingInfo] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    notes: "",
    country: "",
    state: "",
    city: "",
    postal: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
    <CheckoutContext.Provider
      value={{
        shippingInfo,
        setShippingInfo,
        searchQuery,
        setSearchQuery,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
