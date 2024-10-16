"use client";

import { Button } from "@/components/ui/button";
import image from "@/assets/images/image.svg";
import avatar from "@/assets/images/avatar.svg";
import imageBig from "@/assets/images/image-big.svg";
import Image from "next/image";
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
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "sonner";

const UserSettings = ({ url }: { url?: string }) => {
  const { user, token } = useAuth();

  const [userDetails, setUserDetails] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone: user?.phone_number || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    zip_code: user?.zip_code || "",
    profile_photo: user?.profile_photo || "",
    gender: "",
    dob: "",
  });
  const [imageUrl, setImage] = useState<string>("");
  const imageRef = useRef<any>(null);

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const profileMutation = useMutation({
    mutationFn: () =>
      axios.post(
        `${baseUrl}${url ? url : "/user/profile/update"}`,
        userDetails,
        { headers },
      ),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("An error occured!");
    },
  });
  const handleUpdate = () => {
    console.log(userDetails);
    profileMutation.mutate();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevVals: any) => ({ ...prevVals, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file);
    const formdata = new FormData();
    file && formdata.append("image", file);

    const imageUrl = file && URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrl && setImage(imageUrl);
  };
  const handleSelectImage = () => {
    imageRef && imageRef.current?.click();
  };
  console.log(userDetails);
  return (
    <div className="flex flex-col gap-y-[32px] px-[24px] py-[28px] font-openSans">
      {/* Logo Image upload */}
      <div className="flex gap-x-[56px]">
        <div className="flex w-[305px] flex-col gap-y-[20px]">
          <div className="flex flex-col gap-y-[6px] pr-[65px]">
            <h6 className="text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              Profile photo
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
              This image will be displayed on your profile
            </p>
          </div>
          <Button
            onClick={handleSelectImage}
            className="flex w-fit gap-[10px] rounded-[8px] border-[1.5px] border-greenPrimary bg-white px-[12px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-greenPrimary"
          >
            <Image
              src={image}
              width={20}
              height={20}
              alt="img"
              className="sie-[20px]"
            />
            <span>Upload Photo</span>
          </Button>
          <Input
            ref={imageRef}
            type="file"
            hidden
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        {/* image */}
        <div className="flex size-[120px] items-center justify-center rounded-full bg-[#E4E7EC]">
          <Image
            src={imageUrl || avatar}
            width={72}
            height={72}
            alt="image"
            className={`${imageUrl ? "size-[120px] rounded-full" : "size-[72px]"} object-cover`}
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-border"></div>
      <div className="flex w-full flex-col gap-y-[24px] pr-[134px]">
        {/* Full Name */}
        <div className="flex gap-x-[24px]">
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              First Name
            </label>
            <Input
              type="text"
              name="first_name"
              value={userDetails?.first_name}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder={userDetails?.first_name}
            />
          </div>
          {/* Last name */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Last name
            </label>
            <Input
              type="text"
              name="last_name"
              value={userDetails?.last_name}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder={userDetails?.last_name}
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Email address
          </label>
          <div className="flex flex-col gap-y-[8px]">
            <Input
              type="email"
              disabled
              className="h-[44px] w-full rounded-[6px] border-[1px] border-[#E4E7EC] p-[12px] text-[14px] leading-[20.3px] disabled:bg-[#E4E7EC] disabled:text-[#787C83]"
              placeholder={userDetails?.email}
            />
            <button className="self-start text-[14px] font-[400] leading-[20.3px] text-[#7D9A37]">
              Verify your account
            </button>
          </div>
        </div>
        {/* Phone Number*/}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Phone number
          </label>
          <div className="gap-x[12px] flex rounded-[6px] border-[1px] border-border p-[12px]">
            <Select>
              <SelectTrigger className="hidden h-[44px] w-fit rounded-[6px] border-none">
                <SelectValue placeholder="US" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>--</SelectLabel>
                  <SelectItem value="---">--</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="tel"
              className="h-[44px] w-full border-none text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              placeholder="+1 23455246337"
              value={userDetails.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Date of birth*/}
        <div className="flex gap-x-[16px]">
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Date of Birth
            </label>
            <Input
              type="date"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              // placeholder="placeholder"
              value={userDetails.dob}
              onChange={(e) =>
                setUserDetails((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          </div>
          <div className="flex w-full flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Gender
            </label>
            <Select
              value={userDetails.gender}
              onValueChange={(e) =>
                setUserDetails((prev) => ({ ...prev, gender: e }))
              }
            >
              <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Button
        onClick={handleUpdate}
        className="bg[#E4E7EC] text[#8E97A6] w-fit rounded-[8px] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px]"
      >
        Save Changes
      </Button>
    </div>
  );
};

export default UserSettings;
