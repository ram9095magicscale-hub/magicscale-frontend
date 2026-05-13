import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { companyDetails } from "../data/companyDetails";
import { 
  ShieldCheck, 
  Database, 
  Eye, 
  Share2, 
  Lock, 
  Cookie, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from "lucide-react";

const privacyPolicy = [
  {
    title: "Introduction",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
    content: `
      Welcome to <b>Magic Scale Restaurant Consultant!</b> Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you access our website or use our services.
    `,
  },
  {
    title: "Information We Collect",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    content: `
      We collect information that you provide to us directly, such as your <b>name, email address, phone number,</b> and any documents necessary for onboarding or FSSAI licensing. We may also collect data automatically, such as your <b>IP address, browser type,</b> and usage data when you visit our website.
    `,
  },
  {
    title: "How We Use Your Information",
    icon: <Eye className="w-6 h-6 text-emerald-500" />,
    content: `
      The information we collect is used to <b>provide and improve our services,</b> process your requests, communicate with you, and ensure compliance with legal obligations. We may also use your data to send you updates or promotional offers.
    `,
  },
  {
    title: "Sharing Your Information",
    icon: <Share2 className="w-6 h-6 text-purple-500" />,
    content: `
      We do not <b>sell or rent</b> your personal information to third parties. However, we may share your data with <b>trusted partners,</b> such as Swiggy, Zomato, or FSSAI authorities, to facilitate the services you’ve requested.
    `,
  },
  {
    title: "Data Security",
    icon: <Lock className="w-6 h-6 text-rose-500" />,
    content: `
      We implement <b>strict security measures</b> to protect your information from unauthorized access, alteration, or destruction. Despite our efforts, no system can be 100% secure, and we encourage you to take precautions when sharing sensitive information online.
    `,
  },
  {
    title: "Cookies and Tracking",
    icon: <Cookie className="w-6 h-6 text-amber-500" />,
    content: `
      Our website uses <b>cookies</b> to improve user experience and analyze site performance. You can manage or disable cookies through your browser settings, but some features of our website may not function properly without cookies.
    `,
  },
  {
    title: "Your Rights",
    icon: <UserCheck className="w-6 h-6 text-cyan-500" />,
    content: `
      You have the right to <b>access, update, or delete</b> your personal information. To exercise these rights, please contact us at <b>support@magicscale.in</b>.
    `,
  },
  {
    title: "Changes to this Privacy Policy",
    icon: <RefreshCw className="w-6 h-6 text-orange-500" />,
    content: `
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date. We encourage you to <b>review this policy periodically.</b>
    `,
  },
  {
    title: "Contact Us",
    icon: <Mail className="w-6 h-6 text-indigo-500" />,
    content: `
      If you have any questions or concerns about this Privacy Policy, please contact us:
    `,
    details: [
      { icon: <UserCheck className="w-4 h-4" />, label: companyDetails.founder },
      { icon: <Mail className="w-4 h-4" />, label: companyDetails.email.support },
      { icon: <Phone className="w-4 h-4" />, label: companyDetails.phone.primary },
      { icon: <MapPin className="w-4 h-4" />, label: companyDetails.address.fullAddress },
    ]
  },
];

const PrivacyPolicies = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
              Legal Document
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy <span className="text-indigo-600 dark:text-indigo-400">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              At Magic Scale, we value your trust. This policy explains how we handle your data with transparency, integrity, and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {privacyPolicy.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300"
                  id={policy.title.toLowerCase().replace(/\s+/g, '-')}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {policy.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {policy.title}
                    </h2>
                  </div>
                  
                  <div 
                    className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 prose prose-slate dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                  />

                  {policy.details && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {policy.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                          <span className="text-indigo-500">{detail.icon}</span>
                          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{detail.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar / Quick Links */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 px-2">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {privacyPolicy.map((policy, index) => (
                    <a
                      key={index}
                      href={`#${policy.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium">{policy.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200 dark:shadow-none overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Have Questions?</h3>
                <p className="text-indigo-100 text-sm mb-4 relative z-10">
                  Our team is here to help you understand how we protect your information.
                </p>
                <a 
                  href="mailto:support@magicscale.in"
                  className="inline-flex items-center justify-center w-full py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors relative z-10"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer / Last Updated */}
      <div className="container mx-auto px-6 pb-20">
        <div className="text-center py-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-500 text-sm italic">
            Last Updated: May 13, 2026
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicies;

