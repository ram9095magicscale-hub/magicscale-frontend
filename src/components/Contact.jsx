import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { companyDetails } from "../data/companyDetails";
import { contactAPI } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "Swiggy Onboarding",
    "Zomato Onboarding",
    "Growth / Marketing",
    "FSSAI License",
    "Photography",
    "Combo Onboarding",
    "Other Services"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await contactAPI.submitMessage({ ...formData, source: 'contact_form' });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-32 px-6 sm:px-12 lg:px-24 bg-white dark:bg-slate-950 overflow-hidden font-poppins transition-colors duration-500"
    >
      {/* Premium Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/60 dark:bg-indigo-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-50/60 dark:bg-sky-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            We're Here to Help
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6">
            Have a question or need help getting started? Drop us a line, and
            our team will get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Items */}
            <div className="space-y-6">
              {[
                { icon: <MessageSquare size={24} />, title: "Contact Person", detail: companyDetails.founder },
                { icon: <Phone size={24} />, title: "Phone Number", detail: companyDetails.phone.primary, link: `tel:${companyDetails.phone.primary.replace(/\s+/g, '')}` },
                { icon: <Mail size={24} />, title: "Email Address", detail: companyDetails.email.support, link: `mailto:${companyDetails.email.support}` },
                { icon: <MapPin size={24} />, title: "Office Location", detail: companyDetails.address.fullAddress }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-5 p-6 rounded-[2rem] bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a href={item.link} className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
             <div className="p-8 rounded-[2rem] bg-indigo-600 text-white relative overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-black mb-1">Need fast support?</h4>
                        <p className="text-indigo-100">Message us on WhatsApp</p>
                    </div>
                    <a 
                      href={`https://wa.me/${companyDetails.phone.whatsappGroup}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center font-bold hover:scale-105 transition-transform"
                    >
                      <ArrowRight size={24} />
                    </a>
                </div>
             </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Decorative blob behind form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20 rounded-[3rem] transform -rotate-2 scale-105 -z-10"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 p-8 md:p-12 text-start rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 93113 30885"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Select Service
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl text-emerald-700 dark:text-emerald-400"
                >
                  <CheckCircle size={20} />
                  <p className="text-sm font-medium">Message sent successfully!</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl text-rose-700 dark:text-rose-400"
                >
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full ${status === "loading" ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-5 px-8 rounded-2xl transition-all flex justify-center items-center gap-2 shadow-lg shadow-indigo-200 dark:shadow-none hover:-translate-y-1 group`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
