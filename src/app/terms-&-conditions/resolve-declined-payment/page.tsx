import React from "react";

const ResolvePayment = () => {
  return (
    <div className="mt-[24px] px-[96px] pb-[32px] text-[14px] font-[400]">
      <h2 className="text-center text-[18px] font-[600] uppercase">
        Resolve a Declined Payment
      </h2>
      <p className="mt-[14px]">
        To protect your security and privacy, your bank can&apos;t provide
        Sahara Eagle with information about why your payment was declined.
        Contact your bank directly to solve these payment issues.
      </p>
      <div className="mt-[14px] flex flex-col gap-[6px]">
        <p>
          To determine why your payment was declined, consider the following,
          and, if necessary, contact your bank for more information:
        </p>
        <div className="flex flex-col gap-[4px]">
          <p>• Have you exceeded your credit limit?</p>
          <p>
            • Did you enter your credit card number, credit card expiration
            date, billing address, and phone number correctly in SaharaEagle?
          </p>
          <p>
            • Is your purchase outside of your normal spending range? Some banks
            will block transactions due to security concerns.
          </p>
          <p>
            • Does your issuing bank have special policies regarding electronic
            or internet purchases?
          </p>
        </div>
      </div>
      <div className="mt-[16px] flex flex-col gap-[8px]">
        <h6 className="font-[500]">To retry a declined payment:</h6>
        <div className="flex flex-col gap-[4px]">
          <p>1. Go to Your Orders.</p>
          <p>2. Do one of the following:</p>
          <div className="flex flex-col gap-[4px] pl-[12px]">
            <p>a. Try again with a different payment method, as follows:</p>
            <p>
              b. Select Change Payment Method next to the order you want to
              modify.
            </p>
            <p>
              c. Select another payment method from your account or submit a new
              card number and select Confirm.
            </p>
            <p>d. Select Retry Payment Method next to the order.</p>
          </div>
          <p>
            • Retry your current payment method by selecting Retry Payment
            Method next to the order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResolvePayment;
