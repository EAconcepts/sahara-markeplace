"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

// export const useGet: any = (url: string, queryKey: String) => {
//   const { token, userType } = useAuth();
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   // const getQuery = useQuery({
//   //   queryKey: [queryKey],
//   //   queryFn: () => {
//   //     if (userType !== "user" && url.includes("cart")) {
//   //       return null;
//   //     } else {
//   //       return axios.get(`${apiUrl}/${url && url}`, { headers });
//   //     }
//   //   },
//   // });

//   let data: any = "";
//   let updatedAt = "";
//   if (getQuery.data) {
//     data = getQuery.data;
//     updatedAt = new Date().toUTCString();
//     return { data, updatedAt };
//   }
//   if (getQuery.error) {
//     console.log(getQuery.error);
//   }
//   return {
//     data,
//     updatedAt,
//     isPending: getQuery.isPending,
//     refetch: getQuery.refetch,
//   };
// };

export const useGet: any = (url: string, queryKey: string) => {
  const { token, userType } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const getQuery = useQuery({
    queryKey: [queryKey, url, userType],
    queryFn: async () => {
      if (userType !== "user" && url.includes("cart")) {
        throw new Error("Unauthorized access to cart");
      }
      const response = await axios.get(`${apiUrl}/${url}`, { headers });
      return response.data;
    },
  });

  return {
    data: getQuery ?? "",
    updatedAt: getQuery.data ? new Date().toUTCString() : "",
    isLoading: getQuery.isLoading,
    isError: getQuery.isError,
    error: getQuery.error,
    refetch: getQuery.refetch,
  };
};
