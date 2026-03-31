import { FaUtensils, FaMotorcycle, FaCertificate, FaStore } from "react-icons/fa";
// import swiggyImg from "../assets/swiggy.png";
import zomatoImg from "../assets/zomato.png";
import swiggyImg from "../assets/swiggynew2.png";

import fssaiImg from "../assets/fssai.png";
import brandingImg from "../assets/branding.png";


const services = [
  {
    title: "Zomato Setup",
    icon: <FaUtensils size={24} />,
    image: zomatoImg,
    description: "We help you list and optimize your restaurant on Zomato.",
  },
  {
    title: "Swiggy Setup",
    icon: <FaMotorcycle size={24} />,
     image: swiggyImg,
    description: "Full onboarding and boost for your Swiggy business.",
  },
  {
    title: "FSSAI License",
    icon: <FaCertificate size={24} />,
    image: fssaiImg,
    description: "We get your FSSAI license approved quickly.",
  },
  {
    title: "Branding & Logo",
    icon: <FaStore size={24} />,
    image: brandingImg,
    description: "Complete logo and design support for your outlet.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 bg-purple-100 dark:bg-slate-900 p-6 border-r border-purple-200 dark:border-slate-800">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-indigo-400 mb-4">More Services</h3>
        <ul className="space-y-3 text-purple-600 dark:text-gray-400 font-medium">
          {services.map((service, i) => (
            <li key={i} className="hover:text-purple-900 dark:hover:text-white transition cursor-pointer">
              {service.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Content */}
      <main className="w-full md:w-3/4 p-6 md:p-12 bg-[#faf5ff] dark:bg-slate-900/50">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-800 dark:text-white">
          Explore Our <span className="text-pink-500">Full Services</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-pink-400">{service.icon}</span>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;




