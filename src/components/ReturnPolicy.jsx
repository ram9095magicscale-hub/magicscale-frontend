import React from "react";

const returnPolicy = [
  {
    title: "Eligibility for Refunds",
    content: `
      Refunds are only applicable under the following conditions:
      1. If <b>Magic Scale Resturant Consultant</b> is unable to deliver the agreed service due to internal issues or unforeseen circumstances.
      2. If the service request is canceled <b>before</b> the initiation of the process.
    `,
  },
  {
    title: "Non-Refundable Cases",
    content: `
      Refunds will not be provided in the following cases:
      1. If the service process (e.g., Swiggy/Zomato onboarding, FSSAI registration) has already been initiated.
      2. If delays occur due to incomplete or incorrect information provided by the customer.
      3. For <b>change of mind</b> after the process has begun.
      4. If external factors, such as delays from third parties (e.g., Swiggy, Zomato, or FSSAI authorities), impact service delivery.
    `,
  },
  {
    title: "Refund Process",
    content: `
      1. <b>Request Submission</b>: If you believe you are eligible for a refund, contact us at <b>support@magicscale.in</b> with your order details and reason for requesting a refund.
      2. <b>Review</b>: Our team will review your request and assess eligibility based on the outlined policy.
      3. <b>Approval</b>: If approved, the refund will be processed within <b>7–10 business days</b> through the original payment method.
    `,
  },
  {
    title: "Cancellation Policy",
    content: `
      - Cancellation is only allowed <b>before</b> the service process begins.
      - To cancel your service request, contact us immediately at <b>support@magicscale.in</b> or call us at <b>+91 8826073117</b>.
    `,
  },
  {
    title: "Contact Us",
    content: `
      For any questions or concerns about our Return and Refund Policy, reach out to us: <br />
      Vishal Kushwaha
       1. <b>Email</b> : support@magicscale.in </br>
       2. <b>Phone</b> : +91 8826073117 </br>
       3. <b>Address</b> : H.No 72, Navyug Public School, Rajokari, New Delhi - 110038
    `,
  },
];

const ReturnPolicy = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="bg-indigo-500 dark:bg-indigo-600 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">Return and Refund Policy</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px] dark:text-gray-300">
        {returnPolicy.map((data, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50 dark:border-slate-800">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333] dark:text-white">
              {data.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnPolicy;
