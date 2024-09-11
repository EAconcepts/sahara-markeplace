"use client";
import { AuthProvider } from "@/utils/useAuth";
import { CheckoutProvider } from "@/utils/useCheckout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CheckoutProvider>{children}</CheckoutProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
