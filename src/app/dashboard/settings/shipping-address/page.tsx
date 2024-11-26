"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/utils/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const ShippingAddress = () => {
  const { token, baseUrl, user, setUser } = useAuth();

  const [addressDetails, setAddressDetails] = useState({
    address: user?.address ?? "",
    country: user?.country ?? "",
    city: user?.city ?? "",
    state: user?.state ?? "",
    postal: user?.postal ?? "",
  });
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressDetails((prev: any) => ({ ...prev, [name]: value }));
  };
  const addressMutation = useMutation({
    mutationFn: () =>
      axios.post(`${baseUrl}/user/profile/update`, addressDetails, { headers }),
    onSuccess: (data) => {
      console.log(data);
      const userData = data?.data?.data;
      // console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      toast.success("Shipping address updated successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("An error occured!");
    },
  });
  const handleSubmit = () => {
    console.log(addressDetails);
    addressMutation.mutate();
  };
  return (
    <div className="flex w-full flex-col gap-[32px]">
      <div className="flex w-[80%] flex-col gap-[24px]">
        {/* Address */}
        <div className="flex w-full flex-col gap-[8px]">
          <label
            htmlFor="address"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Address
          </label>
          <Input
            id="address"
            value={addressDetails.address}
            onChange={handleChange}
            name="address"
            type="text"
            className="h-[44px] w-full"
          />
        </div>
        {/* Apartment */}
        <div className="flex w-full flex-col gap-[8px]">
          <label
            htmlFor="apartment"
            className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
          >
            Apartment, Suite, Unit etc
          </label>
          <Input id="apartment" type="text" className="h-[44px] w-full" />
        </div>
        {/* Country & State*/}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/* Country */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="country"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Country
            </label>
            <Input
              id="country"
              name="country"
              value={addressDetails.country}
              onChange={handleChange}
              type="text"
              className="h-[44px] w-full"
            />
            {/* <Select>
              <SelectTrigger className="h-[44px] w-full">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="nga">Nigeria</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          {/* State */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="state"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              State
            </label>
            <Input
              name="state"
              value={addressDetails.state}
              onChange={handleChange}
              id="state"
              type="text"
              className="h-[44px] w-full"
            />
          </div>
        </div>
        {/* City & Zip code */}
        <div className="flex w-full gap-[24px] max-lg:flex-col">
          {/*City*/}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="city"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              City
            </label>
            <Input
              id="city"
              name="city"
              value={addressDetails.city}
              onChange={handleChange}
              type="text"
              className="h-[44px] w-full"
            />
          </div>
          {/* Zip Code */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="zipcode"
              className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
            >
              Zip Code
            </label>
            <Input
              id="zipcode"
              value={addressDetails.postal}
              name="postal"
              onChange={handleChange}
              type="text"
              className="h-[44px] w-full"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        className="h-[36px] rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#8E97A6]"
      >
        {addressMutation.isPending ? "Saving..." : " Save Changes"}
      </Button>
    </div>
  );
};

export default ShippingAddress;
