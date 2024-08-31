"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import image from "@/assets/images/signup.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "../(components)/authCard";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm_password: "",
  });
  
const router = useRouter()
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userDetails)
    registerMutation.mutate();
  };
  const registerMutation = useMutation({
    mutationFn: () => axios.post(`${baseUrl}/register-status`, userDetails),
    onSuccess: (data) => {
      console.log("Signup successful!", data);
      if(data.status===200){
      toast.success("Signup successful!");
        router.push('/auth/signin')
    }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Signup failed!");
    },
  });

  return (
    <div className="flex w-full flex-col pt-[40px] max-lg:pb-[80px] lg:pb-[300px]">
      <div className="flex max-lg:flex-col w-full gap-x-[24px] max-lg:px-[24px] lg:px-[96px]">
        <AuthCard image={image} header="Join the EAGLES"  imgClassName="max-lg:hidden" />
        {/* signup form */}
        <form
          onSubmit={handleSignup}
          className="flex w-full flex-col max-lg:mt-[40px] lg:px-[40px] font-openSans"
        >
          <h4 className="text-center text-[24px] font-[600] leading-[28.8px] text-blackPrimary">
            Sign Up
          </h4>
          <p className="mt-[8px] text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Create your Eagle&apos;s account
          </p>
          <div className="mt-[24px] flex w-full flex-col gap-y-[16px]">
            <div className="grid w-full grid-cols-2 gap-x-[16px] lg:gap-x-[24px] gap-y-[4px] font-openSans">
              <label
                htmlFor="first_name"
                className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
              >
                First Name
              </label>
              <label
                htmlFor="last_name"
                className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
              >
                Last Name
              </label>
              <Input
                type="text"
                placeholder="first name"
                id="first_name"
                name="first_name"
                onChange={handleChange}
                value={userDetails.first_name}
                className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
              />
              <Input
                type="text"
                placeholder="last name"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                value={userDetails.last_name}
                className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
              />
            </div>
            {/* Email & Phone */}
            <div className="flex flex-col gap-y-[24px]">
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
              {/* Phone */}
              <div className="flex flex-col gap-y-[4px]">
                <label
                  htmlFor="phone"
                  className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={userDetails.phone}
                  placeholder="phone"
                  className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
                />
              </div>
            </div>
            {/* Password and confirm password */}
            {/* Email & Phone */}
            <div className="flex flex-col gap-y-[24px]">
              <div className="flex flex-col gap-y-[4px]">
                <label
                  htmlFor="password"
                  className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={userDetails.password}
                  placeholder="password"
                  className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-y-[4px]">
                <label
                  htmlFor=""
                  className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirm_password"
                  onChange={handleChange}
                  name="confirm_password"
                  value={userDetails.confirm_password}
                  type="password"
                  placeholder="confirm password"
                  className="h-[56px] max-lg:h-[48px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6]"
                />
              </div>
            </div>
          </div>
          <Button
          disabled={registerMutation.isPending}
            type="submit"
            className="mt-[40px] max-lg:h-[48px] h-[55px] rounded-[12px] bg-[#7D9A37] disabled:bg-[#7D9A37]/20 hover:bg-[#7D9A37]/50 py-[16px] text-[16px] font-[600] leading-[23.2px] text-white"
          >
            {registerMutation.isPending ? "Signing up..." : " Sign up"}
          </Button>
          <div className="mt-[24px] flex items-center justify-center gap-x-[12px] text-[14px] lg:text-[20px]">
            <span className="font-[400] leading-[29px] text-[#787C83]">
              Already have an account?
            </span>{" "}
            <button
              type="button"
              className="font-[700] leading-[24px] text-[#7D9A37]"
            >
             Sign in
            </button>
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="mt-[40px] flex h-[53px] w-full justify-center bg-black py-[12px]">
        <p className="text-center font-openSans text-[20px] font-[400] leading-[29px] text-white">
          Welcome to Sahara Eagle
        </p>
      </div>
    </div>
  );
};

export default Signup;
