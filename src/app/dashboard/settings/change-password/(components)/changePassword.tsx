"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export const ChangePassword = ({
  url = "",
  endpoint,
}: {
  url?: string;
  endpoint?: string;
}) => {
  const [details, setDetails] = useState({
    oldpassword: "",
    newpassword: "",
    cnewpassword: "",
  });
  const { token, baseUrl } = useAuth();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const passwordMutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/${endpoint}`, details, { headers }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Password updated successfully!");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details);
    passwordMutation.mutate();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[32px] px-[24px] py-[28px] font-openSans"
    >
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Current Password */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Current Password
          </label>
          <Input
            type="password"
            name="oldpassword"
            value={details.oldpassword}
            onChange={handleChange}
            className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
          />
        </div>
        {/* New & Confirm Password */}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/* New Password */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="newPassword"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              New Password
            </label>
            <Input
              id="newPassword"
              type="password"
              name="newpassword"
              value={details.newpassword}
              onChange={handleChange}
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
            />
          </div>
          {/* Confirm new password */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="ConfirmPassword"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Confirm New Password
            </label>
            <Input
              id="ConfirmPassword"
              type="password"
              name="cnewpassword"
              value={details.cnewpassword}
              onChange={handleChange}
              className="h-[44px] w-full text-[14px] font-[400] leading-[20.3px] placeholder:text-[#787C83]"
            />
          </div>
        </div>
      </div>
      <Button
        disabled={passwordMutation.isPending}
        className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]"
      >
        {passwordMutation.isPending ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
};
