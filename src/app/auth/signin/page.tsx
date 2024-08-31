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
const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const { login } = useAuth();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userDetails);
    loginMutation.mutate();
  };
  const loginMutation = useMutation({
    mutationFn: () => axios.post(`${baseUrl}/user-login`, userDetails),
    onSuccess: (data) => {
      console.log("Signin successful!", data);
      if (data.status === 200) {
        const token = data.data.data.token;
        const user = data.data.data.user;
        login(token, user, "user");
        toast.success("Signin successful!");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    },
    onError: (error:any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Signin failed!");
    },
  });

  return (
    <div className="flex w-full flex-col pt-[40px] max-lg:pb-[81px] lg:pb-[300px]">
      <div className="lg:flex w-full gap-x-[24px] lg:px-[96px] max-lg:px-[24px]">
        <AuthCard
          image={image}
          header="Welcome Back!"
          imgClassName="-mt-[120px] h-full max-lg:hidden"
        />
        {/* signin form */}
        <form
          onSubmit={handleSignin}
          className="flex lg:w-[90%] max-lg:w-full max-lg:mt-[40px] flex-col lg:px-[40px] font-openSans"
        >
          <h4 className="text-center text-[24px] font-[600] leading-[28.8px] text-blackPrimary">
            Sign In
          </h4>
          <p className="mt-[8px] text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Login into your account
          </p>
          <div className="mt-[32px] flex w-full flex-col gap-y-[24px]">
            {/* Email & Phone */}
            <div className="flex flex-col gap-y-[4px]">
              <label
                htmlFor="email"
                className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
              >
                Email Address
              </label>
              <Input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={userDetails.email}
                placeholder="email address"
                className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
              />
            </div>
            {/*  Password  */}
            <div className="flex flex-col gap-y-[4px]">
              <label
                htmlFor="password"
                className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                onChange={handleChange}
                value={userDetails.password}
                type="password"
                placeholder="password"
                className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
              />
            </div>
          </div>
          <div className="mt-[40px] flex items-center justify-between">
            <div className="flex items-center gap-x-[8px]">
              <Input type="checkbox" className="size-[24px]" />
              <label className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                Keep me logged in
              </label>
            </div>
            <button className="text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
              Forgot passowrd?
            </button>
          </div>
          <Button
            type="submit"
            disabled={loginMutation.isPending}
            className="mt-[40px] h-[55px] rounded-[12px] bg-[#7D9A37] py-[16px] text-[16px] font-[600] leading-[23.2px] text-white hover:bg-[#7D9A37]/50 disabled:bg-[#7D9A37]/20"
          >
            {loginMutation.isPending ? "Signing in..." : " Sign In"}
          </Button>
          <div className="mt-[24px] flex items-center justify-center gap-x-[8px] lg:gap-x-[12px] text-[14px] lg:text-[20px]">
            <span className="font-[400] leading-[29px] text-[#787C83]">
              Don&apos;t have an account yet?
            </span>{" "}
            <button
              type="button"
              onClick={() => router.push("/auth/signup")}
              className="font-[700] leading-[24px] text-[#7D9A37]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      {/* footer */}
      <Welcome />
    </div>
  );
};

export default Signin;
