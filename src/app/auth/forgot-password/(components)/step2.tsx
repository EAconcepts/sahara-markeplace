import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const StepTwo = ({ props }: { props: any }) => {
  return (
    <div className="mt-[32px] flex w-full flex-col gap-y-[24px]">
      {/* Email */}
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
          onChange={props.onChange}
          value={props.resetDetails.email}
          placeholder="email address"
          className="h-[56px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6] max-lg:h-[48px]"
        />
      </div>
      {/* Token */}
      <div className="flex flex-col gap-y-[4px]">
        <label
          htmlFor="token"
          className="text-[14px] font-[600] leading-[20.3px] [before:content-'**'] before:text-[#E8112D]"
        >
          Token
        </label>
        <Input
          type="text"
          id="token"
          name="token"
          onChange={props.onChange}
          value={props.resetDetails.token}
          placeholder="token"
          className="h-[56px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] bg-white p-[16px] font-[400] leading-[20.3px] text-[#8E97A6] max-lg:h-[48px]"
        />
      </div>

      <Button
        type="button"
        onClick={() => props.mutation.mutate()}
        disabled={props.mutation.isPending}
        className="mt-[40px] h-[55px] w-full rounded-[12px] bg-[#7D9A37] py-[16px] text-[16px] font-[600] leading-[23.2px] text-white hover:bg-[#7D9A37]/50 disabled:bg-[#7D9A37]/20"
      >
        {props.mutation.isPending ? "Requesting..." : " Request"}
      </Button>
    </div>
  );
};
