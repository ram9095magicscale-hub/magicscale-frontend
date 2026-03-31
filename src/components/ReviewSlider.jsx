"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const testimonials = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjWdiqLds-TdHl8_IltN1R1NAkPV2ruWgJ-q2Ib7GFn_J_mavalzHw=s64-c-rp-mo-ba2-br100",
    title: "Rakesh Verma",
    designation: "Professional Plan",
    review:
      "MagicScale ne hamari restaurant listing Swiggy aur Zomato pe asaan bana di. Ab zyada orders aa rahe hain aur sales mein bhi boost mila hai! 🙌",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjWXTAq088nCnDe2NDDV-2aYi4AWFUDh5jT-PRZwWEWrOvSePZUM5Q=s64-c-rp-mo-br100",
    title: "Anita Sharma",
    designation: "Starter Plan",
    review:
      "I didn’t expect the process to be this smooth. FSSAI license bhi jaldi mil gaya aur team kaafi supportive thi. ⭐⭐⭐⭐⭐",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjXfTasUMn1X7Qq0v-na3akIRjk7GwAh5oiRJ-rF2c3Ux9hxt1cm=s64-c-rp-mo-br100",
    title: "Yuvraj Gupta",
    designation: "Cloud Kitchen Plan",
    review:
      "Cloud kitchen setup ke liye MagicScale ki team ne har step par madad ki. Ab hamari kitchen fully operational hai aur response amazing hai! 🥳",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjXgtOUx8BecYSBcOpnAydef8lYuVvqRoD-FXMMlnhDGNgxcNEKA=s64-c-rp-mo-br100",
    title: "Priya Singh",
    designation: "Business Plan",
    review:
      "Swiggy onboarding mein jo speed MagicScale ne dikhayi, wo lajawab thi. Highly recommend for anyone starting out. 🚀",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjUR7ugHwsrlxcrn5e85YdzWpmlpabCwJ6UXBqOfnaBgjKLABMJF=s64-c-rp-mo-br100",
    title: "Sahil Mehra",
    designation: "Starter Plan",
    review:
      "MagicScale saved me so much hassle. Ab mujhe khud apply karne ki tension nahi hai. Awesome service! 😄",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocJ3txaxojeg_rpiFqN_0sH7uQZWTyMGTkjLYjGFu4_U_iaOSKiK=s64-c-rp-mo-ba2-br100",
    title: "Sunil Bhardwaj",
    designation: "Professional Plan",
    review:
      "FSSAI license application itna smooth hoga socha bhi nahi tha. Thank you, MagicScale! 🌟",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjVCKob18zoOwXEJ5EUSjUVAIExROGyOX3AhAAYydQaont3jwInm=s64-c-rp-mo-ba4-br100",
    title: "Meena Rathore",
    designation: "Business Plan",
    review:
      "Ab meri restaurant listing Swiggy aur Zomato dono par hai, aur customers bhi increase ho gaye hain. MagicScale kaafi helpful raha! 🙏",
  },
];

const CustomerReview = () => {
  return (
    <div className="py-8 rounded-md flex flex-col antialiased p-1 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={[
          {
            image:
              "https://tse2.mm.bing.net/th?id=OIP.s3xn3J2A9eEZF0bJTG8EJAHaEK&pid=Api&P=0&h=180",
            title: "Client 1",
          },
          {
            image:
              "https://tse4.mm.bing.net/th?id=OIP.D6YeVYeJFg727U9fS7d2jQHaFj&pid=Api&P=0&h=180",
            title: "Client 2",
          },
          {
            image:
              "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aad4d0110142211.5fe4b63868daa.jpg",
            title: "Client 3",
          },
          // Add more logos...
        ]}
        speed="normal"
        direction="left"
        pauseOnHover={true}
      />
    </div>
  );
};

export default CustomerReview;
