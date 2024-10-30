"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";
import { useGet } from "./useGet.";

// export interface cartProps{
//   id: number;
//   quantity: number;
// }
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
  const cart = localStorage.getItem("cart");

  const [carts, setCarts] = useState((cart && JSON.parse(cart)) || []);
  const { baseUrl, token } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  //Update cart items
  const { data } = useGet("/my-cart", "cart");
  useEffect(() => {
    if (token) {
      setCartItems(data?.data?.data?.cart);
    } else {
      // console.log(cartItems);
    }
  }, [data, carts]);

  const refetchCart = async () => {
    console.log("from refetching cart");
    if (token) {
      const response = await axios.get(`${baseUrl}/my-cart`, { headers });
      setCartItems(response.data?.data?.cart);
    } else {
      // localStorage.setItem("cart", JSON.stringify(carts));
      setCartItems(carts);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        shippingInfo,
        setShippingInfo,
        searchQuery,
        setSearchQuery,
        cartItems,
        setCartItems,
        refetchCart,
        carts,
        setCarts,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
