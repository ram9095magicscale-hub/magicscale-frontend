
import React from "react";

const data = [
  {
    title: "Service Delivery Timeline",
    content: `
      1. <b>Swiggy & Zomato Onboarding:</b> Once all necessary documents are submitted, the onboarding process typically takes <b>5–10 business days</b>. You will receive confirmation once your restaurant profile is live on the platforms.<br>
      2. <b>FSSAI Registration:</b> FSSAI license registration and approval timelines depend on the type of license (Basic, State, or Central) and the completeness of the submitted information. Generally, it takes <b>7–15 business days</b> to process. Updates will be shared via email or WhatsApp.<br>
      3. <b>Cloud Kitchen Setup:</b> The timeline for cloud kitchen setup varies depending on the project scope. Our team will provide you with a detailed project plan and expected completion date during the consultation.
    `,
  },
  {
    title: "Delivery of Documents and Communication",
    content: `
      - <b>Digital Delivery:</b> All necessary licenses, documents, and updates will be shared with you electronically via email or WhatsApp for quick and seamless communication.<br>
      - <b>Physical Copies:</b> If physical copies of licenses are required, they can be arranged on request and may involve additional charges for courier services.
    `,
  },
  {
    title: "Customer Responsibilities",
    content: `
      - <b>Provide accurate and complete information,</b> including all required documents, to avoid delays in service delivery.<br>
      - <b>Respond promptly</b> to any queries or requests for additional information from our team to ensure smooth processing.
    `,
  },
  {
    title: "Refund and Cancellation Policy",
    content: `
      As we deal with consultancy services, <b>refunds or cancellations</b> are not applicable once the process has begun. However, if there are issues or delays from our end, we will make every effort to resolve them quickly.
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions or concerns regarding service delivery, please reach out to us:<br>
      - <b>Email:</b> support@magicscale.in<br>
      - <b>Phone:</b> +91 8826073117<br>
      - <b>Address:</b> H.No 72, Navyug Public School, Rajokari, New Delhi - 110038
    `,
  },
];

const ShippingPolicy = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="bg-indigo-500 dark:bg-indigo-600 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">Shipping and Delivery</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px] dark:text-gray-300">
        {data.map((item, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50 dark:border-slate-800">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333] dark:text-white">
              {item.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingPolicy;
