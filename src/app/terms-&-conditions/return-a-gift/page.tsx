import React from "react";

const ReturnGift = () => {
  return (
    <div className="mt-[24px] px-[96px] pb-[32px] text-[14px] font-[400]">
      <h2 className="text-center text-[18px] font-[600] uppercase">
        RETURN A GIFT
      </h2>
      <div className="flex flex-col gap-[8px]">
        <p className="mt-[8px]">
          The Returns Center allows gift recipients to return items marked as a
          gift at the time of purchase.
        </p>
        <p className="flex items-start gap-[2px]">
          <span className="shrink-0 font-[600]">Important note: </span>
          Before starting your return process, please be aware that gift items
          valued at more than $2000 can only be refunded to the original payment
          method of the purchaser of the gift.
        </p>
        <div className="flex flex-col">
          <h6 className="font-[600]">Exchanges & Replacements</h6>
          <p>
            If you received a gift and need an exchange or replacement,
            you&apos;ll need to return the gift and place a new order. If
            you&apos;re the gift giver, you can request a replacement in Your
            Orders
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <h6 className="font-[600]">How to return a gift:</h6>
          <div className="flex flex-col gap-[4] pl-[12px]">
            <p>
              1. Go to the Returns Center. If prompted, sign in to your Sahara
              Eagle account. If you don&apos;t have an account, you&apos;ll need
              to create one.
            </p>
            <p>3. Select Search.</p>
            <p>
              4. Select the items that you want to return and the return reason
              from the drop-down menu. For items sold by a third-party seller,
              you&apos;ll see Submit return request. Some Sahara Eagle sellers
              review return requests before authorizing them.
            </p>
            <p>
              5. Select your preferred return method. If you choose to return
              using Sahara Eagle Hub Locker, select a Sahara Eagle Hub Locker
              location. For more information,
            </p>
            <p>6. Follow the instructions on the screen.</p>
          </div>
          {/* Return without receipt */}
          <div className="flex flex-col gap-[4px]">
            <h6 className="font-[600]">
              Return a Gift - With or Without Gift Receipt
            </h6>
            <p>
              To start a gift return you will need your order number. You can
              find your 17-digit order number on your packing slip that came
              with your item. You can also find it on the digital gift receipt
              we emailed you. If you can&apos;t locate the order number, you can
              ask the gift giver for details.
            </p>
          </div>
          {/* Things to consider */}
          <div className="flex flex-col gap-[4px]">
            <h6 className="font-[600]">
              Things to Consider Before Returning a Gift
            </h6>
            <p>
              A returned item must be in the same condition in which it was
              received (including accessories). This information is stated in
              our return policy. You may receive a partial refund for returned
              items not received in this condition. For more information, visit
              the Refunds help page.
            </p>
            <p>
              Before you return items on which you&apos;ve saved personal
              information; laptops, cameras, or other electronic devices, erase
              this information completely.
            </p>
            <p>
              To receive the correct refund, don&apos;t include items from
              multiple orders or shipments in the same return box.
            </p>
          </div>
          {/* How to track */}
          <div className="flex flex-col gap-[4px]">
            <h6 className="font-[600]">How to Track Your Return</h6>
            <p>
              Track your return through the Return Summary email that you
              received after requesting your return or in the Returns Center.
            </p>
          </div>
          {/* How we process */}
          <div className="flex flex-col gap-[4px]">
            <h6 className="font-[600]">How We Process Your Refund</h6>
            <p>
              Gift recipients aren&apos;t eligible for instant refunds. If
              you&apos;re the gift recipient, we&apos;ll process your refund as
              a Sahara Eagle.com Gift Card after we receive your return. The
              refund amount goes to the gift card balance of the Sahara Eagle
              account that you used to generate your return.{" "}
            </p>
            <p>
              To view your refund status, follow the instructions on Check the
              Status of Your Refund. If you&apos;re the gift giver, you can
              receive a refund to your gift card balance or the original payment
              method. All refunds are subject to our refund policies and
              timelines outlined in Refunds.
            </p>
          </div>
        </div>
        {/* Replace */}
        <div className="mt-[16px] flex flex-col gap-[8px]">
          <h6 className="font-[600]">
            REPLACE A DAMAGED, DEFECTIVE, OR BROKEN ITEM
          </h6>
          <p>
            Visit Your Orders and we will let you know what your options are for
            damaged, defective, or broken items.
          </p>
          <p>To replace an item:</p>
          <p className="pl-[12px]">
            1. Go to Your Orders and select Return or Replace items beside the
            item you want to replace.
          </p>
          <p>
            Tip: If your order is from a third-party seller or not eligible for
            a replacement, select Return Items. Enter a return reason on the
            next screen.
          </p>
          <p className="pl-[12px]">
            2. Select the item that you want to replace and select a reason from
            the Reason for return menu.
          </p>
          <p className="pl-[12px]">3. Follow the instructions on the screen.</p>
          <p>
            A replacement order, with the same shipping speed that was used on
            your original item, will be created. You&apos;ll need to return the
            original item within 30 days to avoid being charged for keeping both
            the original and replacement items. The replacement order may be
            shipped only after you ship the original item(s) back to Sahara
            Eagle. We recommend you to ship back the original item(s) as soon as
            you request a replacement.
          </p>
          {/* Looking for */}
          <div className="flex flex-col gap-[4px]">
            <p className="font-[600]">You may be looking for…</p>
            <div className="flex flex-col gap-[4px] pl-[12px]">
              <p>
                • For product support on eligible items, visit Get Product
                Support.
              </p>
              <p>
                • Missing an item? Go to Find a Missing Item from Your Package.
              </p>
              <p>
                • If tracking shows that your package was delivered but you
                can&apos;t locate it, visit Find a Missing Package That Shows As
                Delivered
              </p>
              <p>• For more information about refunds, go to Refunds.</p>
              <p>
                • For issues with third-party seller orders, learn about our
                A-to-z Guarantee.
              </p>
            </div>
          </div>
          {/* Find missing item */}
          <div className="flex flex-col gap-[4px]">
            <p>
              If you have received a shipping package that&apos;s missing an
              entire item, it may have been shipped separately. Check Your
              Orders.
            </p>
            <p className="font-[600]">
              Find a missing item shipped by Sahara Eagle
            </p>
            <p>
              If you received your shipping package and an entire item shipped
              by Sahara Eagle is missing, do the following:
            </p>
            <div className="flex flex-col gap-[4px] pl-[12px]">
              <p>
                1. Go to Your Orders and check if the missing item is in another
                shipment.
              </p>
              <p>
                2. Select Track Package to find the delivery date for the
                shipment.
              </p>
              <p>
                3. If there is no tracking information for the missing item,
                Customer Service will assist you.
              </p>
            </div>
            <p>Otherwise, you can follow the recommendations in this page.</p>
            <p className="font-[600]">
              Find a missing item shipped and sold by a third-party seller
            </p>
            <p>
              If the item missing from your package is shipped and sold by a
              third-party seller, contact the seller for assistance. Go to
              Contact a third-party seller.
            </p>
            <p>
              Learn how to identify orders shipped and sold by a seller by
              visiting Ordering from a third- party seller.
            </p>
            <p className="font-[600]">Part of an item is missing</p>
            <p>
              Double check to confirm that the part is missing from the product
              packaging. If you can&apos;t find it, contact the product&apos;s
              manufacturer for assistance.
            </p>
            <p>
              Manufacturer contact information can be found on the product
              packaging, in the paperwork included with the product, or by
              searching the Internet.
            </p>
            <p>
              If you can&apos;t find contact information, or if they can&apos;t
              help, you can return the item. Go to Your Orders and select Return
              or Replace Items
            </p>
            {/* Entire shipping package missing */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-[600]">Entire shipping package is missing</p>
              <div className="flex flex-col gap-[4px] pl-[12px]">
                <p>
                  • If the tracking info shows as delivered but you can&apos;t
                  find the package, go to Find a Missing Package That Shows as
                  Delivered for more information.
                </p>
                <p>
                  • If the tracking info shows as undelivered, go to
                  Undeliverable Packages.
                </p>
              </div>
            </div>
            {/* Replace damaged item */}
            <div className="flex flex-col gap-[8px]">
              <h6 className="font-[600]">
                REPLACE A DAMAGED, DEFECTIVE, OR BROKEN ITEM
              </h6>
              <p>
                Visit Your Orders and we will let you know what your options are
                for damaged, defective, or broken items.
              </p>
              <div className="flex flex-col gap-[4px]">
                <p className="font-[600]">To replace an item:</p>
                <div className="flex flex-col gap-[4px] pl-[12px]">
                  <p>
                    1. Go to Your Orders and select Return or replace items
                    beside the item you want to replace.
                  </p>
                  <p className="-pl-[12px]">
                    Tip: If your order is from a third-party seller or not
                    eligible for a replacement, select Return Items. Enter a
                    return reason on the next screen.
                  </p>
                  <p>
                    2. Select the item that you want to replace and select a
                    reason from the Reason for return menu.
                  </p>
                  <p>3. Follow the instructions on the screen.</p>
                </div>
                <p>
                  A replacement order, with the same shipping speed that was
                  used on your original item, will be created. You&apos;ll need
                  to return the original item within 30 days to avoid being
                  charged for keeping both the original and replacement items.
                  The replacement order may be shipped only after you ship the
                  original item(s) back to Sahara Eagle. We recommend you ship
                  back the original item(s) as soon as you request a
                  replacement.
                </p>
              </div>
              <h6 className="font-[600]">You may be looking for…</h6>
              <p>
                • For product support on eligible items, visit Get Product
                Support.
              </p>
              <p>
                • Missing an item? Go to Find a Missing Item from Your Package.
              </p>
              <p>
                • If tracking shows that your package was delivered but you
                can&apos;t locate it, visit Find a Missing Package That Shows As
                Delivered.
              </p>
              <p>• For more information about refunds, go to Refunds.</p>
              <p>
                • For issues with third-party seller orders, learn about our
                Eagle&apos;s Guarantee.
              </p>
            </div>
          </div>
          {/* Refunds */}
          <div className="flex flex-col gap-[8px]">
            <h6 className="font-[600]">REFUNDS</h6>
            <p>
              When you return an item, your refund amount and refund method may
              vary. Check the payment method refunded and the status of your
              refund in Your Orders.
            </p>
            <p>
              Note: All information on this page only relates to items bought
              from or Fulfilled by Sahara Eagle. Don&apos;t return items to
              Sahara Eagle that were bought on Sahara Eagle Marketplace and
              shipped to you by the seller.
            </p>
            <div className="flex flex-col gap-[4px]">
              <h6 className="font-[600]">
                How Long Do Refunds Take After I Return an Item?
              </h6>
              <p>
                A refund will be provided after we process your return item at
                our facilities. It can take up to 30 days for us to receive and
                process your return. In certain circumstances refund time frames
                may be longer.
              </p>
              <p>
                We issue the refund to the refund method you select in the
                Online Returns Center, and it may take additional time for your
                financial institution to process the refund. See below Refund
                Times. Learn how to Track Your Return.
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h6 className="font-[600]">
                Advanced Refunds/Replacements/Exchanges
              </h6>
              <p>
                Sometimes, we issue a refund or ship a replacement/exchange to
                you prior to receiving the return item.
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h6 className="font-[600]">Advanced Refund</h6>
              <p>
                In some cases, as soon as the item is dropped off by you or
                received by our carrier, a refund will be issued, in advance of
                our receipt and processing of the item at our facilities, to
                your credit card or as Sahara Eagle.com Gift Card balance.
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h6 className="font-[600]">Advanced Replacement/Exchange</h6>
              <p>
                If you see an option in the Online Return Center to initiate a
                replacement/exchange of your original item, follow the
                instructions to return the item and request a
                replacement/exchange. If the replacement/exchange order is
                immediately shipped to you, you&apos;ll need to return your
                original item(s) by the &quot;Return by&quot; date referred to
                in your return request confirmation email or you will be charged
                for the replacement/exchange.
              </p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h6 className="font-[600]">
                Possible charges after advanced refunds/replacements/exchanges
              </h6>
              <p>
                After you complete a drop off or pick up of return item(s), it
                may take some time for the item(s) to be transported to Sahara
                Eagle. Once we receive the item(s), we will verify and inspect
                the item(s) against the expected product(s) and quantity in your
                return request. If we do not receive the expected product(s) and
                quantity as submitted by you in your return request, or if the
                item(s) are not in original condition or missing
                parts/accessories/manuals, we will charge you the previously
                refunded amount (or for the previously shipped
                replacement/exchange order). If the charge is unsuccessful, you
                will be prompted to complete payment before initiating another
                return request.
              </p>
              <div className="mt-[6px] flex flex-col gap-[4px]">
                <p>To avoid being charged, take the following actions:</p>
                <p>
                  • Only initiate return requests for items in their original
                  condition
                </p>
                <p>• If applicable, apply the correct mailing label.</p>
                <p>
                  • Drop off or pickup each item you&apos;re returning at an
                  eligible location.
                </p>
              </div>
              <p className="mt-[4px]">
                If after completing a drop off or pick up you receive an email
                from us asking you to return an item or items or indicating you
                have been charged for the item(s), the charge will be reversed
                after Sahara Eagle receives and processes the item(s) and
                verifies the expected product(s) in your return request.
              </p>
            </div>
          </div>
        </div>
        {/* REFUND TIMES */}
        <div className="p-8">
          <h6 className="font-[600]">Refund Times</h6>
          <p className="mb-4 text-gray-600">
            Once we issue your refund, it takes additional time for your
            financial institution to make funds available in your account.
          </p>

          <div className="mt-[8px] overflow-x-auto">
            {/* First Table */}
            <table className="mb-8 w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Refund Method
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Refund Time (After Refund Is Processed)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Credit card
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Three to five business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Sahara Eagle.com Gift Card
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Two to three hours
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Second Table */}
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Refund Method
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Refund Time (After Refund Is Processed)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Debit card
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 10 business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Checking account
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 10 business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    SNAP EBT card
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 10 business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Gift Card balance
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Two to three hours
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Promotional Certificate
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    No refund issued
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Shop with Reward Points
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to five business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Pay in Cash (at a participating location)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 10 business days
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Pre-paid credit card
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 30 days (depending on the issuer of the card)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        (
        <div className="p-8">
          {/* Notes Section */}
          <p className="mb-4 text-gray-600">
            <strong>Note:</strong> If you no longer have the physical pre-paid
            credit card, we still store the card within your account. You can
            use the card toward future purchases. For orders that used the
            Sahara Eagle Currency Converter, we issue the refund in your local
            currency using the same rate as the original order.
          </p>

          {/* Gift Returns Section */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-bold">Gift Returns</h2>
            <p className="mb-2 text-gray-600">
              The type of refund or credit a gift recipient receives depends on
              how the giver purchased the gift and how the recipient returns the
              gift. For more information,{" "}
              <a href="#" className="text-blue-600 underline">
                go to Return a Gift
              </a>
              .
            </p>
            <p className="text-gray-600">
              Sahara Eagle may determine that a gift recipient is eligible for a
              refund without requiring a return. If a gift return is eligible
              for a refund without returning the item, the gift recipient
              receives a notification via Customer Service. For more
              information.
            </p>
          </div>

          {/* Partial Refunds Section */}
          <div>
            <h2 className="mb-4 text-lg font-bold">PARTIAL REFUNDS</h2>
            <p className="mb-4 text-gray-600">
              Please note that refunds will be reduced for returned items, such
              as for signs of customer use or damage, or missing parts,
              accessories, or manuals.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="mb-4 w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Item
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Refund
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Items in original condition past the return window*
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      80% of the item price
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Items with damage, missing parts, not in original
                      condition, or that have obvious signs of use for reasons
                      not due to a SaharaEagle.com or seller error
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Up to 50% of the item price
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <p className="mb-4 text-sm text-gray-600">
              <strong>*</strong> For most items, the return window is 30 days
              after delivery. To check the return window for an item you&apos;ve
              ordered, go to Your Orders and select Return or Replace Items.
            </p>

            {/* Additional Note */}
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> For customers in CT, MD, NV, PA, VA, WV,
              and WI, tax on restocking fees may apply to return items shipped
              and sold by SaharaEagle.com. Some products have additional
              conditions that may apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnGift;
