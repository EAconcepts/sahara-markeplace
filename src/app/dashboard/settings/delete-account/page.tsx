import { Button } from "@/components/ui/button";

export const DeleteAccount = ({ url }: { url?: string }) => {
  return (
    <div className="flex w-full flex-col gap-[20px] px-[24px] pt-[28px] font-openSans">
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-[600] leading-[23.2px] text-[#E8112D]">
          Delete Account
        </span>
        <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
          Request to delete your account will remove all the information related
          to your account.This includes order, purchase history, discounts,
          invoices, etc. <br />
          You will NOT be able to restore your access and information after we
          approve your request to delete the account.
        </p>
      </div>
      <textarea
        className="roudned-[6px] h-[72px] w-full border-[1px] border-border p-[12px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary placeholder:text-[#787C83]"
        placeholder="Please tell us why you are doing this (optional)"
      />
      <Button className="h-[36px] rounded-[8px] bg-[#E8112D] px-[16px] py-[8px] text-[14px] font-[700] leading-[20.3px]">
        Submit Request
      </Button>
    </div>
  );
};

const DeleteUserAccount = () => {
  return <DeleteAccount url="" />;
};
export default DeleteUserAccount;
