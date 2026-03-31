import React from "react";

const privacyPolicy = [
  {
    title: "Introduction",
    content: `
      Welcome to <b>Magic Scale Resturant Consultant!</b> Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you access our website or use our services.
    `,
  },
  {
    title: "Information We Collect",
    content: `
      We collect information that you provide to us directly, such as your <b>name, email address, phone number,</b> and any documents necessary for onboarding or FSSAI licensing. We may also collect data automatically, such as your <b>IP address, browser type,</b> and usage data when you visit our website.
    `,
  },
  {
    title: "How We Use Your Information",
    content: `
      The information we collect is used to <b>provide and improve our services,</b> process your requests, communicate with you, and ensure compliance with legal obligations. We may also use your data to send you updates or promotional offers.
    `,
  },
  {
    title: "Sharing Your Information",
    content: `
      We do not <b>sell or rent</b> your personal information to third parties. However, we may share your data with <b>trusted partners,</b> such as Swiggy, Zomato, or FSSAI authorities, to facilitate the services you’ve requested.
    `,
  },
  {
    title: "Data Security",
    content: `
      We implement <b>strict security measures</b> to protect your information from unauthorized access, alteration, or destruction. Despite our efforts, no system can be 100% secure, and we encourage you to take precautions when sharing sensitive information online.
    `,
  },
  {
    title: "Cookies and Tracking",
    content: `
      Our website uses <b>cookies</b> to improve user experience and analyze site performance. You can manage or disable cookies through your browser settings, but some features of our website may not function properly without cookies.
    `,
  },
  {
    title: "Your Rights",
    content: `
      You have the right to <b>access, update, or delete</b> your personal information. To exercise these rights, please contact us at <b>support@magicscale.in</b>.
    `,
  },
  {
    title: "Changes to this Privacy Policy",
    content: `
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date. We encourage you to <b>review this policy periodically.</b>
    `,
  },
  {
    title: "Contact Us",
    content: `
      
      If you have any questions or concerns about this Privacy Policy, please contact us at:<br>
      Vishal kushwaha
      <b>Email:</b> support@magicscale.in<br>
      <b>Phone:</b> +91 8826073117<br>
      <b>Address:</b> H.No 72, Navyug Public School, Rajokari, New Delhi - 110038
    `,
  },
];

const PrivacyPolicies = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="bg-indigo-500 dark:bg-indigo-600 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">PRIVACY POLICY</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px] dark:text-gray-300">
        {privacyPolicy.map((policy, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50 dark:border-slate-800">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333] dark:text-white">
              {policy.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: policy.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicies;
