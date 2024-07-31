import { Input } from "@/components/ui/input";
import React from "react";

const Form = () => {
  return (
    <form className="flex w-full flex-col gap-y-[24px] font-openSans">
      {/* full name */}
      <div className="flex w-full gap-x-[24px]">
        {/* First name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="first_name"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            First Name{" "}
          </label>
          <Input
            id="first_name"
            type="text"
            placeholder="first name"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
        {/* Last name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="last_name"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            Last Name{" "}
          </label>
          <Input
            id="last_name"
            type="text"
            placeholder="last name"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
      </div>
      {/* Eamil & Phone */}
      <div className="flex w-full gap-x-[24px]">
        {/*Email */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="email"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            Email{" "}
          </label>
          <Input
            id="email"
            type="email"
            placeholder="email"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
        {/* Last name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="phone"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            Phone Number{" "}
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="phone number"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
      </div>
      {/*Address */}
      <div className="flex w-full flex-col gap-y-[8px]">
        <label
          htmlFor="address"
          className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
        >
          Address{" "}
        </label>
        <Input
          id="address"
          type="text"
          placeholder="address"
          className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
          required
        />
      </div>
      {/*Apartment */}
      <div className="flex w-full flex-col gap-y-[8px]">
        <label
          htmlFor="apartment"
          className="text-[14px] font-[600] leading-[20.3px]"
        >
          Apartment, Suit, unit
        </label>
        <Input
          id="apartment"
          type="text"
          placeholder="apartment, suite, unit"
          className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
        />
      </div>
      {/* Country & State */}
      <div className="flex w-full gap-x-[24px]">
        {/*Country */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="country"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            Country{" "}
          </label>
          <Input
            id="country"
            type="text"
            placeholder="country"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
        {/* State */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="state"
            className="text-[14px] font-[600] leading-[20.3px]"
          >
            State
          </label>
          <Input
            id="state"
            type="text"
            placeholder="state"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
          />
        </div>
      </div>
      {/* City & Zip code */}
      <div className="flex w-full gap-x-[24px]">
        {/*City */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="city"
            className='text-[14px] font-[600] leading-[20.3px] after:text-[#E8112D] after:content-["**"]'
          >
            City{" "}
          </label>
          <Input
            id="city"
            type="text"
            placeholder="city"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
            required
          />
        </div>
        {/* Zip code */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label
            htmlFor="zip_code"
            className="text-[14px] font-[600] leading-[20.3px]"
          >
            State
          </label>
          <Input
            id="zip_code"
            type="text"
            placeholder="zip code"
            className="h-[56px] w-full rounded-[6px] border-[1px] border-border bg-white"
          />
        </div>
      </div>
       {/*Additional Note */}
       <div className="flex w-full flex-col gap-y-[8px]">
        <label
          htmlFor="note"
          className="text-[14px] font-[600] leading-[20.3px]"
        >
          Apartment, Suit, unit
        </label>
        <textarea
          id="note"
          placeholder="additional notes"
          className="h-[80px] w-full px-[16px] py-[30px] rounded-[6px] border-[1px] border-border bg-white"
        />
      </div>
    </form>
  );
};

export default Form;
