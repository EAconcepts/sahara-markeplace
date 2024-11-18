"use client";

import { Button } from "@/components/ui/button";
import imageIcon from "@/assets/images/image.svg";
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
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChangeEvent, useRef, useState } from "react";
import { useAuth } from "@/utils/useAuth";

const StoreSettings = () => {
  const { user, token, setUser, imgUrl } = useAuth();
  // console.log(imgUrl, user?.image);
  console.log(user);
  const [userDetails, setUserDetails] = useState({
    company: user?.company || "",
    country: user?.country || "",
    image: user?.store_image || "",
    description: user?.description || "",
  });
  const [imageUrl, setImage] = useState<string>(user?.store_image || "");
  const imageRef = useRef<any>(null);
  const [image, setimage] = useState<any>();

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const profileMutation = useMutation({
    mutationFn: () => {
      const formData = new FormData();

      formData.append("company", userDetails?.company);
      formData.append("country", userDetails?.country);
      formData.append("description", userDetails?.description);
      formData.append("image", image);
      return axios.post(`${baseUrl}/vendor/profile/update`, formData, {
        headers,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      const userData = data?.data?.data;
      // console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      toast.success("Store settings updated successfully!");
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
    // console.log(file);
    const formdata = new FormData();
    file && formdata.append("image", file);
    file && setimage(file);

    const imageUrl = file && URL.createObjectURL(file);
    // console.log(imageUrl);
    imageUrl && setImage(imageUrl);
  };
  const handleSelectImage = () => {
    imageRef && imageRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-y-[32px] px-[24px] py-[16px] font-openSans lg:py-[28px]">
      {/* Logo Image upload */}
      <div className="flex max-lg:flex-col-reverse max-lg:gap-y-[16px] lg:gap-x-[56px]">
        <div className="flex flex-col gap-y-[20px] lg:w-[305px]">
          <div className="flex flex-col gap-y-[6px] lg:pr-[65px]">
            <h6 className="text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              Logo image
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-[#8E97A6]">
              This image will be displayed across our platform as your stores
              Logo
            </p>
          </div>
          <Button
            onClick={handleSelectImage}
            className="flex w-fit gap-[10px] rounded-[8px] border-[1.5px] border-greenPrimary bg-white px-[12px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-greenPrimary"
          >
            <Image
              src={imageIcon}
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
        <div className="flex size-[80px] items-center justify-center rounded-full bg-[#E4E7EC] lg:size-[120px]">
          {image ? (
            <Image
              src={imageUrl || imageBig}
              width={72}
              height={72}
              alt="image demo"
              className={`size[44px] lg:size[72px] size-full ${imageUrl && "rounded-full"} object-cover`}
            />
          ) : user?.store_image ? (
            <Image
              // src={avatar}
              src={`${imgUrl}/${imageUrl}`}
              width={72}
              height={72}
              alt="image with baseUrl"
              className={`${imageUrl ? "size-[120px] rounded-full" : "size-[72px]"} object-cover`}
            />
          ) : (
            <Image
              src={imageBig}
              width={72}
              height={72}
              alt="image"
              className={`size-[44px] lg:size-[72px] ${imageUrl && "rounded-full"} object-cover`}
            />
          )}
          {/* <Image
            src={imageBig}
            width={72}
            height={72}
            alt="image"
            className="size-[44px] lg:size-[72px]"
          /> */}
        </div>
      </div>
      <div className="h-[1px] w-full bg-border"></div>
      <div className="flex w-full flex-col gap-y-[24px] lg:pr-[134px]">
        {/* Store Name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Store Name
          </label>
          <Input
            type="text"
            className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
            placeholder="Afritique"
            value={userDetails?.company}
            onChange={handleChange}
            name="company"
          />
        </div>
        {/* Country */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Country
          </label>
          <Input
            type="text"
            className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
            placeholder="United States"
            value={userDetails?.country}
            onChange={handleChange}
            name="country"
          />
          {/* <Select>
            <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
              <SelectValue placeholder="United States" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
        </div>
        {/* Description */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Description
          </label>
          <textarea
            onChange={(e) =>
              setUserDetails((prev: any) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            value={userDetails.description}
            className="h-[124px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
            placeholder="Afritique is your one-stop shop for all things African!  We celebrate the vibrant cultures, rich traditions, and stunning fashions of the African continent. Immerse yourself in our collection of unique and stylish clothing, exquisite home wears, and authentic accessories. Afritique is more than just a store; it's a cultural experience.  "
          />
        </div>

        {/* Yet to be implemented */}
        {/* Add Selling point */}
        {/* <div className="flex w-full flex-col gap-y-[8px]">
          <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Add Selling Point
          </label>
          <Select>
            <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
              <SelectValue placeholder="E.g. Handmade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>---</SelectLabel>
                <SelectItem value="apple">---</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        {/* Social Media */}
        {/* <div className="grid grid-cols-2 gap-x-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Social Media Handle
            </label>
            <Select>
              <SelectTrigger className="h-[44px] w-full rounded-[6px] border-[1px] border-border">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>---</SelectLabel>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="x">X</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex h-full items-end">
            <Input
              type="text"
              className="h-[44px] w-full rounded-[6px] border-[1px] border-border p-[12px]"
              placeholder="Afritique"
            />
          </div>
        </div> */}
        {/* Add another */}
        {/* <div className="hidden h-[44px] w-full rounded-[6px] border-dashed border-[#787C83] p-[12px]">
          <span className="text-center text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Add another handle
          </span>
        </div> */}
      </div>
      <div className="flex gap-x-[16px]">
        <Button
          onClick={handleUpdate}
          disabled={profileMutation.isPending}
          className="bg-[#E4E7EC rounded-[8px] bg-greenPrimary px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-white"
        >
          {profileMutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
        {/* <Button className="rounded-[8px] bg-[#E4E7EC] px-[16px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-[#8E97A6]">
          View Live
        </Button> */}
      </div>
    </div>
  );
};

export default StoreSettings;
