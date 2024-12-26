import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-[24px] px-[96px] py-[24px] text-[14px] font-[400]">
      <p className="flex">
        Sellers may use this{" "}
        <span className="font-[600]">Contact Us form </span> to report
        inappropriate listings, other sellers, policy violations, etc.
      </p>
      <h6 className="font-[600]">
        Reporting Inappropriate Listings, Other Sellers, and Policy Violations
      </h6>
      <p>
        Thank you for contacting Sahara Eagle to report a listing, seller, or
        policy violation. We take these matters seriously and appreciate your
        cooperation in keeping our marketplace safe and fair for everyone.
      </p>
      <div>
        <h6>1. Please select the type of issue you are reporting:</h6>
        <p className="flex">
          <span className="shrink-0 font-[600]">Inappropriate Listing: </span>
          This includes listings that violate our policies on prohibited items,
          intellectual property infringement, misleading or deceptive content,
          or anything else that may be harmful or offensive.
        </p>
        <p className="flex">
          <span className="font-[600]">Sellers Listing ID:</span> (Required)
        </p>
        <p className="flex">
          <span className="font-[600]">Reason for reporting: </span> (Required)
        </p>
        <p className="flex">
          <span className="font-[600]">Other Seller: </span> This includes
          concerns about the behavior of another seller, such as suspected
          fraud, deceptive practices, or violations of our communication
          policies.
        </p>
      </div>
      <div>
        <h2>
          2. Please describe the violation in detail: <span> (Required)</span>
        </h2>
        <p className="font-[600]">
          Do you have any additional information or evidence to support your
          claim? <span className="font-[400]">(Optional, but helpful)</span>
        </p>
        <p className="flex">
          <span className="shrink-0 font-[600]">Inappropriate Listing: </span>
          This includes listings that violate our policies on prohibited items,
          intellectual property infringement, misleading or deceptive content,
          or anything else that may be harmful or offensive.
        </p>{" "}
      </div>
      <div>
        <h2 className="font-[600]">3. Report Another Seller:</h2>
        <p className="font-[600]">
          Seller name or storefront URL:{" "}
          <span className="font-[400]">(Required)</span>
        </p>
        <p>
          The seller&apos;s name or store ID, and any specific details about
          their behavior.
        </p>
        <p className="font-[600]">
          Reason for reporting: <span className="font-[400]">(Required)</span>
        </p>
        <p className="font-[600]">
          Please describe the violation in detail:{" "}
          <span className="font-[400]">(Required)</span>
        </p>
        <p className="font-[600]">
          Do you have any additional information or evidence to support your
          claim?<span className="font-[400]"> (Optional, but helpful)</span>
        </p>
      </div>
      <div>
        <h6 className="font-[600]">4. Report a Policy Violation:</h6>
        <p>
          <span className="font-[600]">Policy violated:</span> (Please select
          from a dropdown menu of Sahara Eagle policies)
        </p>
        <p className="font-[600]">
          Please describe the violation in detail:{" "}
          <span className="font-[400]">(Required)</span>
        </p>
        <p className="font-[600]">
          Do you have any additional information or evidence to support your
          claim? <span className="font-[400]">(Optional, but helpful)</span>
        </p>
      </div>
      <div className="font-[600]">
        <h6>5. Other:</h6>
        <p className="font-[600]">
          Please describe your issue in detail:{" "}
          <span className="font-[400]">(Required) </span>
        </p>
        <div className="font-[600]">
          <p>Contact Information:</p>
          <p>
            Your Name: <span className="font-[400]">(Required)</span>
          </p>
          <p>
            Your Email Address: <span className="font-[400]">(Required)</span>
          </p>
          <p>
            Your Phone Number (Optional):{" "}
            <span className="font-[400]">(Required)</span>
          </p>
        </div>
      </div>
      <div>
        <h6>Additional Notes:</h6>
        <div>
          <p>
            • You can also upload screenshots or other evidence to support your
            report by clicking the &quot;Choose File&quot; button below.
          </p>
          <p>
            • For more information about our seller policies, please visit our
            Seller Help Center.
          </p>
          <p>
            • We encourage you to review our Seller Policies before submitting a
            report: [link to Sahara Eagle Seller Policies].
          </p>
          <p>
            • For urgent matters, please contact Sahara Eagle Customer Support
            directly at [phone number] or [email address].
          </p>
          <p>
            • If you have any questions about this form or the reporting
            process, please contact our Seller Support team.
          </p>
        </div>
        <h6 className="font-[600]">
          Once you have completed the form, please click &quot;Submit&quot; to
          send your report.
        </h6>
        <p>
          <span className="font-[600]">Please note:</span> We cannot guarantee
          the confidentiality of your report or your identity. However, we will
          take all reasonable steps to protect your privacy and all reports will
          be investigated thoroughly. We may contact you for further information
          if needed. We will not share your personal information with the
          reported seller or party unless required by law.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-[600]">
          Thank you for your help in making Sahara Eagle a better marketplace
          for everyone.
        </p>
        <p>Thank you for your cooperation.</p>
      </div>
    </div>
  );
};

export default ContactUs;
