"use client";

import { Welcome } from "@/app/(components)/Welcome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const AdminSignin = () => {
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
  });
  const { baseUrl, login } = useAuth();
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: () => axios.post(`${baseUrl}/admin-login`, adminDetails),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data?.data?.data?.message || "Login Successful!");
      login(
        data?.data?.data?.token,
        data?.data?.data?.admin,
        data?.data?.data?.admin?.user_type?.toLowerCase(),
      );
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 1000);
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login Failed!");
    },
  });

  const handleAdminLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(adminDetails);
    loginMutation.mutate();
  };
  return (
    <div className="w-full font-openSans">
      <div className="flex w-full flex-col items-center pt-[24px]">
        <form
          onSubmit={handleAdminLogin}
          className="flex w-[804px] flex-col gap-[32px] rounded-[8px] p-[40px] px-[96px]"
        >
          <div className="flex flex-col items-center gap-y-[8px]">
            <h4 className="text-[24px] font-[600] leading-[28.8px] tracking-[-2%] text-blackPrimary">
              Sign In
            </h4>
            <p className="text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
              Login into your account
            </p>
          </div>
          {/* Inputs */}
          <div className="flex flex-col gap-y-[40px]">
            <div className="flex flex-col gap-y-[24px]">
              {/* Email */}
              <div className="flex flex-col gap-y-[4px]">
                <label
                  htmlFor="username"
                  className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]"
                >
                  Admin username
                </label>
                <Input
                  id="username"
                  value={adminDetails.username}
                  onChange={(e) =>
                    setAdminDetails((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="username"
                  className="h-[56px] w-full rounded-[6px] border-[1px] p-[16px] text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-y-[4px]">
                <label
                  htmlFor="password"
                  className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) =>
                    setAdminDetails((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  placeholder="password"
                  className="h-[56px] w-full rounded-[6px] border-[1px] p-[16px] text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]"
                />
              </div>
            </div>
            {/* Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex gap-x-[8px]">
                <Input
                  type="checkbox"
                  className="size-[24px] border-[1.5px] border-[#E4E7EC]"
                />
                <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  Keep me logged in
                </span>
              </div>
              <button className="pr-[12px] text-[14px] font-[600] leading-[20.3px] text-greenPrimary">
                Forgot Password?
              </button>
            </div>
            <Button
              disabled={loginMutation.isPending}
              type="submit"
              className="h-[55px] w-full rounded-[12px] bg-greenPrimary py-[16px] text-center text-[16px] font-[600] leading-[23.2px]"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <Welcome />
    </div>
  );
};

export default AdminSignin;
