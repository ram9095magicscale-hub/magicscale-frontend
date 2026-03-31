// Import blog images
import cloudKitchenImg from "../assets/blogs/cloud_kitchen_guide.png";
import menuOptimizationImg from "../assets/blogs/menu_optimization.png";
import fssaiGstImg from "../assets/blogs/fssai_gst_guide.png";

export const blogPosts = [
  {
    id: "cloud-kitchen-guide",
    image: cloudKitchenImg,
    category: "Cloud Kitchen",
    title: "The Ultimate Guide to Starting a Cloud Kitchen in India (2024)",
    excerpt: "Everything you need to know from site selection and equipment to Swiggy/Zomato onboarding. A step-by-step roadmap for foodpreneurs.",
    content: `
      <p>Starting a cloud kitchen is one of the most cost-effective ways to enter the food industry today. Unlike traditional restuarants, cloud kitchens focus entirely on delivery, significantly reducing overhead costs like front-of-house staff and premium real estate.</p>
      
      <h3>1. Identifying the Right Location</h3>
      <p>Your location doesn't need high footfall, but it must be within a 3-5 km radius of your target audience. Proximity to residential hubs or office complexes is key for quick deliveries.</p>
      
      <h3>2. Legal Requirements</h3>
      <p>FSSAI registration, GST, and Fire NOC are mandatory. Ensure your kitchen meets all safety standards before applying.</p>
      
      <h3>3. Platform Onboarding</h3>
      <p>Registering on Swiggy and Zomato is the heartbeat of your business. You'll need high-quality photos, a well-structured menu, and competitive pricing to stand out.</p>
      
      <h3>4. Quality Control</h3>
      <p>In a cloud kitchen, your food is your only brand ambassador. Focus on packaging that keeps the food fresh and hot until it reaches the customer.</p>
    `,
    date: "Mar 15, 2024",
    author: "MagicScale Team"
  },
  {
    id: "menu-optimization",
    image: menuOptimizationImg,
    category: "Menu Strategy",
    title: "How to Optimize Your Restaurant Menu for Swiggy & Zomato",
    excerpt: "Boost your conversion rates with high-quality photography, strategic pricing, and item descriptions that sell. Learn the psychology behind the scroll.",
    content: `
      <p>Your digital menu is your salesperson. On apps like Swiggy and Zomato, customers decide within seconds. Here is how you optimize for conversion.</p>
      
      <h3>1. High-Quality Photography</h3>
      <p>A menu without photos is a lost opportunity. Professional food photography can increase orders by up to 30%. Use bright, natural lighting and show the portion size clearly.</p>
      
      <h3>2. Descriptive Titles and Snappy Descriptions</h3>
      <p>Instead of just "Chicken Burger," try "Classic Grilled Chicken Burger with Spicy Mayo." Describe the taste, texture, and ingredients.</p>
      
      <h3>3. Combos and Add-ons</h3>
      <p>Increase your Average Order Value (AOV) by offering intelligently paired combos. "Make it a meal" buttons are highly effective.</p>
    `,
    date: "Mar 12, 2024",
    author: "Vishal Kushwaha"
  },
  {
    id: "legal-compliance",
    image: fssaiGstImg,
    category: "Legal Compliance",
    title: "Navigating FSSAI and GST: A Simple Guide for Food Businesses",
    excerpt: "Legal hurdles shouldn't stop your culinary dream. We break down the FSSAI licensing and GST registration process for Indian foodpreneurs.",
    content: `
      <p>Operating a food business in India requires strict adherence to legal standards. FSSAI and GST are the two most critical pillars of compliance.</p>
      
      <h3>What is FSSAI?</h3>
      <p>The Food Safety and Standards Authority of India (FSSAI) ensures that the food served is safe for consumption. Depending on your annual turnover, you'll need either a Basic Registration, State License, or Central License.</p>
      
      <h3>GST Registration</h3>
      <p>If your turnover exceeds the threshold or if you are selling through e-commerce operators (like Swiggy/Zomato), GST registration is mandatory. It helps in building trust with vendors and platforms.</p>
    `,
    date: "Mar 10, 2024",
    author: "Compliance Dept."
  }
];
