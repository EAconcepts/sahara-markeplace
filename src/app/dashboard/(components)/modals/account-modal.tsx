'use client'

import { useAuth } from "@/utils/useAuth";
import { Alert02Icon } from "hugeicons-react";

export const ActiveStatusModal = () => {
  const {user} = useAuth()
  if(user?.email_verify_status !="0"){
    return null
  }
  return (
    <div className="flex flex-col gap-y-[8px] rounded-[8px] bg-[#F9E79F99] px-[24px] py-[16px] font-openSans">
      <div className="flex items-center gap-x-[8px]">
        <Alert02Icon className="size-[20px]" />
        <span className="text-[16px] font-[600] leading-[23.2px] text-blackPrimary">
          Your account is not yet active
        </span>
      </div>
      <pre className="text-wrap break-words font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
        Hi Juan, <br />
        Thanks for joining the Sahara Eagles community! We&apos;re thrilled to
        have you on board and excited to share the beauty and vibrancy of
        African culture with you. <br />
        To complete your Sahara Eagles adventure, we&apos;ve sent a confirmation
        email to your inbox. Just click the &quot;Confirm Your Account&quot;
        button to activate your account and set your password.
      </pre>
      <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
        I did not receive this mail.{" "}
        <button className="font-[700]">Resend Email</button>
      </p>
    </div>
  );
};
