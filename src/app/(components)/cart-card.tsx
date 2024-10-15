import Image from "next/image";
import React, { useState } from "react";
import usa from "@/assets/images/usa.svg";
import { TbMinus, TbPlus } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import details1 from "@/assets/images/details1.png";
import axios from "axios";
import { useAuth } from "@/utils/useAuth";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Delete03Icon } from "hugeicons-react";
import { useCheckout } from "@/utils/useCheckout";

const CartCard = ({
  product,
  showQuantity = true,
  showStore = true,
  imgClass,
}: {
  showQuantity?: boolean;
  imgClass?: string;
  showStore?: boolean;
  product?: any;
}) => {
  const [quantity, setQuantity] = useState<number>(Number(product?.quantity));
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { token } = useAuth();
  const { refetchCart } = useCheckout();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const queryClient = useQueryClient();
  // Delete cart Item
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.get(`${baseUrl}/delete-cart-item/${id}`, { headers }),
    onSuccess: (data: any) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.refetchQueries({ queryKey: ["cart"] });
      toast.success(data?.data?.message);
      refetchCart();
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: () =>
      axios.post(
        `${baseUrl}/update-cart`,
        { cart_id: product?.id, quantity },
        { headers },
      ),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data?.data?.data?.message || "Cart updated successfully");
      refetchCart();
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Couldn't update cart",
      );
    },
  });
  const deleteItem = async (id: number) => {
    deleteMutation.mutate(id);
  };
  // console.log(product)
  return (
    <div className="flex w-full gap-x-[12px]">
      <Image
        src={`${imageBaseUrl}/${product?.product?.image} `}
        width={152}
        height={152}
        alt=""
        className={twMerge(
          "rounded-[4px] object-cover max-lg:size-[130.5px] lg:size-[152px] lg:shrink-0",
          imgClass,
        )}
      />
      {/* Details */}
      <div className="flex w-full flex-col gap-y-[16px]">
        <div className="flex flex-col">
          {/* {showStore &&   <div className="flex w-full items-center gap-x-[8px]">
            <span className="font-openSans text-[10px] lg:text-[12px] font-[600] leading-[14.4px] tracking-[-2%] text-blackPrimary">
              Afritique-Benin
            </span>
            <Image
              src={usa}
              width={15}
              height={10}
              className="h-[10px] w-[15px]"
              alt=""
            />
            <span className="font-openSans text-[10px] lg:text-[12px] font-[600] leading-[17.4px] text-[#787C83]">
              View Store
            </span>
          </div>
} */}
          <div className="flex w-full flex-col gap-y-[8px]">
            <div className="flex w-full justify-between">
              <h4 className="font-openSans text-[14px] font-[600] leading-[19.2px] text-blackPrimary lg:text-[16px]">
                {product?.product?.name}
              </h4>
              <h4 className="font-openSans text-[16px] font-[700] leading-[26.1px] text-blackPrimary lg:text-[18px]">
                ${product?.product?.price * product?.quantity}
              </h4>
            </div>
            {/* sizes */}
            <div className="flex flex-col gap-y-[4px] text-[12px] font-[400] leading-[20.3px] text-[#787C83] lg:text-[14px]">
              <p> Color: N</p>
              <p>Size: L</p>
            </div>
          </div>
        </div>
        {/* Quantity */}
        {showQuantity && (
          <div className="flex justify-between">
            {/* quantity */}
            <div className="flex w-fit items-center gap-[24px] gap-x-[12px] rounded-[40px] border-[1px] border-[#E4E7EC] px-[16px] py-[8px] lg:gap-x-[27.5px] lg:px-[17.5px] lg:py-[12.5px]">
              <TbMinus
                onClick={() => {
                  setQuantity((prev: number) => {
                    if (prev == 1) {
                      return prev;
                    } else return prev - 1;
                  });
                  updateMutation.mutate();
                }}
                className="text-[18px] text-[#8E97A6] lg:text-[24px]"
              />
              <span className="font-openSans text-[14px] font-[600] leading-[19.2px] tracking-[2%] text-[#7D9A37] lg:text-[16px] lg:leading-[24px]">
                {quantity}
              </span>
              <TbPlus
                onClick={() => {
                  setQuantity((prev) => {
                    if (prev == product?.product?.quantity) {
                      return prev;
                    } else return prev + 1;
                  });
                  updateMutation.mutate();
                }}
                className="text-[18px] text-greenPrimary lg:text-[24px]"
              />
            </div>
            {/* trash */}
            <Delete03Icon
              onClick={() => deleteItem(product?.id)}
              className="size-[16px] text-[#787C83] lg:size-[20px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCard;
