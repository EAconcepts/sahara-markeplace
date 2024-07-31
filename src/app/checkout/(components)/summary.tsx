import CartCard from "@/app/(components)/cart-card";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  const carts = [1, 2, 3];
  return (
    <div className="flex flex-col px-[24px] font-openSans">
      <div className="flex gap-x-[16px]">
        <h4 className="text-[24px] font-[600] leading-[28.8px] tracking-[-2%] text-blackPrimary">
          Order Summary
        </h4>
        <p className="flex size-[30px] items-center justify-center rounded-full bg-greenPrimary px-[10px] py-[10px] text-[16px] font-[600] leading-[23.2px] text-white">
          {" "}
          3
        </p>
      </div>
      <div className="mt-[32px] flex flex-col gap-y-[16px] border-b-[2px] border-border pb-[28px]">
        {carts?.map((cart, index) => (
          <CartCard
            key={index}
            showStore={false}
            showQuantity={false}
            imgClass="size-[80px]"
          />
        ))}
      </div>
      <div className="mt-[16px] flex flex-col gap-y-[24px] divide-y-[2px] divide-border">
        {/* Subtotal */}
        <div className="pb[24px] flex justify-between">
          <span className="#787C83 text-[16px] font-[500] leading-[23.2px]">
            Subtotal:{" "}
          </span>
          <h5 className="text-[16px font-[600] leading-[23.2px] text-blackPrimary">
            $492.97
          </h5>
        </div>
        {/* Tax */}
        <div className="flex justify-between pt-[24px]">
          <span className="#787C83 text-[16px] font-[500] leading-[23.2px]">
            Tax:{" "}
          </span>
          <h5 className="text-[16px font-[600] leading-[23.2px] text-blackPrimary">
            $9.97
          </h5>
        </div>
        {/* Total */}
        <div className="flex justify-between pt-[24px]">
          <span className="#787C83 text-[16px] font-[500] leading-[23.2px]">
            Total:{" "}
          </span>
          <h5 className="text-[16px font-[600] leading-[23.2px] text-blackPrimary">
            $502.94
          </h5>
        </div>
        <div className="pt-[24px]">
          <Button className="h-[55px] w-full rounded-[12px] bg-greenPrimary py-[16px] font-openSans text-[16px] font-[700] leading-[23.2px] text-white">
            Continue to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
