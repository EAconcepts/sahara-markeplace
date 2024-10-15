"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import image from "@/assets/images/signin.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "../(components)/authCard";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@/utils/useAuth";
import { Welcome } from "@/app/(components)/Welcome";
import { StepOne } from "./(components)/step1";
import { StepTwo } from "./(components)/step2";
import { StepThree } from "./(components)/step3";
const ForgotPassword = () => {
  const [step, setStep] = useState<number>(1);
  const [resetDetails, setResetDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
  });

  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const { login } = useAuth();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetDetails((prev) => ({ ...prev, [name]: value }));
  };

  const step1Mutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/reset-password/initiate`, {
        email: resetDetails.email,
      }),
    onSuccess: (data) => {
      console.log("initiate", data);
      setStep(2);
      toast.success(" successful!");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Password Reset failed!");
    },
  });
  const step2Mutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/reset-password/verify-token`, {
        email: resetDetails.email,
        token: resetDetails.token,
      }),
    onSuccess: (data) => {
      console.log("step 2", data);
      setStep(3);
      toast.success(data?.data?.message);
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Password Reset failed!");
    },
  });
  const step3Mutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/reset-password/send`, {
        email: resetDetails.email,
        token: resetDetails.token,
        password: resetDetails.password,
        password_confirmation: resetDetails.confirmPassword,
      }),
    onSuccess: (data) => {
      console.log("step 3", data);
      // setStep(2);
      toast.success(data?.data?.message);
      router.push("/auth/signin");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Password Reset failed!");
    },
  });

  return (
    <div className="flex w-full flex-col pt-[40px] max-lg:pb-[81px] lg:pb-[300px]">
      <div className="w-full gap-x-[24px] max-lg:px-[24px] lg:flex lg:items-center lg:px-[96px]">
        <AuthCard
          image={image}
          header="Welcome Back!"
          imgClassName="-mt-[120px] h-full max-lg:hidden"
        />
        {/* signin form */}
        <form className="flex flex-col font-openSans max-lg:mt-[40px] max-lg:w-full lg:w-[90%] lg:px-[40px]">
          <h4 className="text-center text-[24px] font-[600] leading-[28.8px] text-blackPrimary">
            Reset Password
          </h4>
          <p className="mt-[8px] text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Enter details to reset password
          </p>
          {step == 1 ? (
            <StepOne
              props={{
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setResetDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  })),
                mutation: step1Mutation,
                email: resetDetails.email,
              }}
            />
          ) : step == 2 ? (
            <StepTwo
              props={{
                onChange: handleChange,
                resetDetails,
                mutation: step2Mutation,
              }}
            />
          ) : (
            step == 3 && (
              <StepThree
                props={{
                  onChange: handleChange,
                  mutation: step3Mutation,
                  resetDetails,
                }}
              />
            )
          )}
        </form>
      </div>
      {/* footer */}
      {/* <Welcome /> */}
    </div>
  );
};

export default ForgotPassword;
