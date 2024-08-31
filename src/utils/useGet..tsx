"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

export const useGet: any = (url: string, queryKey: String) => {
  const { token } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // console.log(queryKey)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(`${apiUrl}/${url && url}`, { headers }),
  });
  let data: any = "";
  if (getQuery.data) {
    // console.log(getQuery.data)
    data = getQuery.data;
    return data;
  }
  if (getQuery.error) {
    // toast.error(getQuery.error.message || "An error occured!")
    console.log(getQuery.error)};
  return data;
};
