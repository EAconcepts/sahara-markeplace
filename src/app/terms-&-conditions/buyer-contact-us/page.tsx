import React from "react";

const BuyersContactForm = () => {
  return (
    <div className="mt-[32px] px-[96px]">
      {/* Form Title */}
      <h1 className="mb-4 text-center text-2xl font-bold uppercase">
        Sahara Eagle Buyers Contact Us Form
      </h1>

      {/* Welcome Message */}
      <p className="mb-6 text-gray-700">
        Welcome! We understand that sometimes you may encounter issues with your
        orders or have questions about seller policies. We&apos;re here to help!
        Please use this form to report any problems you experience as a buyer on
        SaharaEagle.com. Whether you&apos;re facing problems with your order,
        experiencing seller policy violations, or have other concerns,
        we&apos;re here to listen and find a resolution.
      </p>

      {/* Instructions */}
      <h2 className="mb-4 text-lg font-bold">
        Need help with your order or have a question about our marketplace?
      </h2>
      <p className="mb-6 text-gray-700">
        We&apos;re here to assist! Please select the reason for your inquiry
        below and we&apos;ll guide you to the best way to resolve your issue.
      </p>

      {/* Section 1: Order-related Issues */}
      <div className="mb-6">
        <h3 className="text-md mb-2 font-bold">1. For order-related issues:</h3>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>
            <strong>Track your order:</strong> Check the status and estimated
            delivery date of your order by visiting your account page and
            clicking on &quot;Order History.&quot;
          </li>
          <li>
            <strong>Cancel an order:</strong> If your order hasn&apos;t shipped
            yet, you can cancel it yourself by visiting your account page and
            clicking on &quot;Order History.&quot;
          </li>
          <li>
            <strong>Request a return or exchange:</strong> If you&apos;re not
            satisfied with your purchase, you can request a return or exchange
            within our return policy timeframe.
          </li>
          <li>
            <strong>Report a problem with your order:</strong> If your order is
            damaged, missing items, or incorrect, please fill out the form
            below.
          </li>
        </ul>
      </div>

      {/* Section 2: Seller Policy Violations or Other Concerns */}
      <div className="mb-6">
        <h3 className="text-md mb-2 font-bold">
          2. For seller policy violations or other concerns:
        </h3>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>
            <strong>Report an inappropriate listing:</strong> If you see a
            listing that violates Sahara Eagle&apos;s policies, please fill out
            the form below.
          </li>
          <li>
            <strong>Product concerns:</strong> This includes concerns about the
            quality, safety, or authenticity of a product you received.
          </li>
          <li>
            <strong>Report another seller:</strong> If you have concerns about
            the behavior of another seller, please fill out the form below.
          </li>
          <li>
            <strong>Report a policy violation:</strong> If you see a seller
            violating Sahara Eagle&apos;s policies, please fill out the form
            below.
          </li>
          <li>
            <strong>Seller policy violation:</strong> This includes concerns
            about a seller&apos;s behavior, such as misleading descriptions,
            unfair shipping practices, poor communication, or non-compliance
            with Sahara Eagle&apos;s policies.
          </li>
          <li>
            <strong>Other:</strong> If your inquiry doesn&apos;t fall into any
            of the above categories, please select this option and provide
            details below.
          </li>
        </ul>
      </div>

      {/* Section 3: Form Fields */}
      <div>
        <h3 className="text-md mb-2 font-bold">
          3. Please provide the following information (if applicable):
        </h3>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>Your Name</li>
          <li>Your Email Address</li>
          <li>
            <strong>Order Number:</strong> (if reporting a problem with an
            order)
          </li>
          <li>
            <strong>Reason for Inquiry:</strong> (e.g., reporting a seller
            policy violation)
          </li>
          <li>
            <strong>Details of your concern:</strong> Please provide a clear and
            concise description of the issue you are experiencing, so we can
            understand it better and ensure we can assist you.
          </li>
          <li>
            <strong>Attachments:</strong> (optional): If you have any
            screenshots, photos, or other evidence that supports your inquiry,
            you can upload them here.
          </li>
        </ul>
      </div>
      {/*NOTE  */}
      <div className="my-[16px]">
        <h2 className="mb-2 text-lg font-semibold">Please note:</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            We take all reports seriously and will investigate them thoroughly.
          </li>
          <li>We may contact you for more information if needed.</li>
          <li>
            The more information you provide, the better we can assist you.
          </li>
          <li>We will treat your inquiry with confidentiality.</li>
          <li>
            We will not share your personal information with any third party
            without your consent.
          </li>
        </ul>
      </div>

      <div className="mb-[6px]">
        <h2 className="mb-2 text-lg font-semibold">Additional Information:</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            You can also contact us by phone at [phone number] or by live chat.
          </li>
          <li>
            For general inquiries about using SaharaEagle.com, please visit our
            Help Center.
          </li>
          <li>Our operating hours are [operating hours].</li>
        </ul>
      </div>

      <p className="mb-[32px] text-sm text-gray-700">
        Thank you for contacting SaharaEagle.com. We value your feedback and are
        committed to providing a positive experience for all our buyers and will
        work hard to resolve your issue as quickly as possible.
      </p>
    </div>
  );
};

export default BuyersContactForm;
