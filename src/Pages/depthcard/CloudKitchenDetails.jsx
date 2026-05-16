import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle, FaRocket, FaUtensils, FaChartLine,
  FaStore, FaTools, FaBolt, FaMapMarkerAlt, FaCamera,
  FaInstagram, FaStar, FaWhatsapp
} from "react-icons/fa";
import cloudKitchenImg from "../../assets/cloud_kitchen_setup.png";
import { useTheme } from "../../components/context/ThemeContext";
import { companyDetails } from "../../data/companyDetails";
import Footer from "../../components/Footer";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const CloudKitchenDetails = () => {
  const navigate = useNavigate();
  useTheme(); // keeps ThemeProvider context active for dark mode CSS vars

  const whatsappBase = `https://wa.me/${companyDetails.phone.whatsappGroup}`;

  const handleConsult = () => window.open(`${whatsappBase}?text=Hi%2C%20I%20want%20to%20book%20a%20free%20Cloud%20Kitchen%20consultation.`, "_blank");
  const handlePlan = (plan) => window.open(`${whatsappBase}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan)}%20Cloud%20Kitchen%20plan.`, "_blank");

  const services = [
    {
      title: "Market Research & Location Analysis",
      desc: "We identify high-demand areas, best-fit cuisines, competitor gaps, and delivery radius profitability before you invest a single rupee.",
      icon: <FaMapMarkerAlt className="text-cyan-500 text-2xl" />,
      tag: "Start Here",
    },
    {
      title: "Brand Identity",
      desc: "Logo, color palette, packaging design, menu theme, and Instagram identity that makes customers remember and reorder.",
      icon: <FaStore className="text-blue-500 text-2xl" />,
      tag: "Stand Out",
    },
    {
      title: "Kitchen Setup Assistance",
      desc: "Kitchen layout, equipment list, vendor sourcing, costing analysis, workflow design, and staff planning — all optimized for profitability.",
      icon: <FaTools className="text-orange-500 text-2xl" />,
      tag: "Operations",
    },
    {
      title: "Legal & Compliance",
      desc: "FSSAI, GST, Shop License, MSME registration, and Swiggy/Zomato onboarding documentation — fast-tracked with zero stress.",
      icon: <FaCheckCircle className="text-emerald-500 text-2xl" />,
      tag: "100% Legal",
    },
    {
      title: "Menu Engineering",
      desc: "High-profit item selection, combo strategy, pricing psychology, menu positioning, and food photography guidance to maximize order value.",
      icon: <FaUtensils className="text-purple-500 text-2xl" />,
      tag: "High Value",
    },
    {
      title: "Swiggy / Zomato Growth",
      desc: "Listing optimization, banner design, SEO keywords, ratings strategy, review generation, ads optimization, and conversion boosting.",
      icon: <FaRocket className="text-red-500 text-2xl" />,
      tag: "Best Seller",
    },
    {
      title: "Marketing & Customer Retention",
      desc: "Instagram reels, influencer outreach, local ads, WhatsApp marketing, loyalty campaigns, and repeat customer systems.",
      icon: <FaInstagram className="text-pink-500 text-2xl" />,
      tag: "Scale Up",
    },
  ];

  const problems = [
    "Can't find the right location or cuisine",
    "Swiggy/Zomato visibility stays low",
    "Branding looks unprofessional",
    "GST/FSSAI process is confusing",
    "Marketing doesn't bring repeat customers",
    "No clear growth plan after launch",
  ];

  const steps = [
    { num: "01", title: "Free Consultation", desc: "We understand your vision, budget, and market opportunity." },
    { num: "02", title: "Market Research", desc: "Location analysis, cuisine demand, competitor mapping." },
    { num: "03", title: "Brand & Legal Setup", desc: "Logo, identity, FSSAI, GST, kitchen design." },
    { num: "04", title: "Platform Launch", desc: "Swiggy/Zomato onboarding, menu photography, listing optimization." },
    { num: "05", title: "Growth & Scaling", desc: "Marketing, ads, retention campaigns, monthly consulting." },
  ];

  const plans = [
    {
      name: "Starter",
      tag: "Get Started",
      subtitle: "Best for first-time cloud kitchen owners",
      color: "border-gray-200 dark:border-slate-700",
      btnColor: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800",
      features: [
        "Location & Cuisine Research",
        "Basic Brand Identity (Logo)",
        "FSSAI & GST Assistance",
        "Swiggy/Zomato Onboarding",
        "Menu Engineering (10 items)",
        "30-day Support",
      ],
    },
    {
      name: "Growth",
      tag: "Most Popular",
      subtitle: "Best for brands ready to scale on platforms",
      color: "border-cyan-500 shadow-2xl shadow-cyan-500/10",
      btnColor: "bg-cyan-600 hover:bg-cyan-700 text-white",
      popular: true,
      features: [
        "Everything in Starter",
        "Full Brand Identity Package",
        "Kitchen Layout & Setup Guide",
        "Menu Photography Guidance",
        "Zomato/Swiggy Ads Setup",
        "Instagram Content Strategy",
        "WhatsApp Marketing Setup",
        "90-day Growth Support",
      ],
    },
    {
      name: "Premium",
      tag: "Full Service",
      subtitle: "End-to-end execution & long-term partnership",
      color: "border-blue-500 dark:border-blue-400",
      btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
      features: [
        "Everything in Growth",
        "Full Kitchen Setup Execution",
        "Packaging Design",
        "Influencer Outreach Campaign",
        "Monthly Performance Reporting",
        "Dedicated Account Manager",
        "Revenue Share Option Available",
        "6-month Ongoing Partnership",
      ],
    },
  ];

  const stats = [
    { val: "1,000+", label: "Kitchens Launched" },
    { val: "₹5L+", label: "Avg. First-Year Revenue" },
    { val: "3–4 Wks", label: "Go-Live Timeline" },
    { val: "4.8★", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="pt-28 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-10">
            <span onClick={() => navigate("/services")} className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 cursor-pointer transition-colors">Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="9 18 15 12 9 6" /></svg>
            <span className="text-slate-500 dark:text-slate-400">Cloud Kitchen</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold tracking-widest uppercase">
                <FaBolt /> End-to-End Cloud Kitchen Partner
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Launch Your Cloud Kitchen{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                  The Right Way.
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-slate-400 leading-relaxed max-w-xl">
                From location research to branding, menu engineering, Swiggy/Zomato setup, and growth marketing — we help you build a <strong className="text-gray-900 dark:text-white">profitable food brand from scratch.</strong>
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4">
                <button onClick={handleConsult}
                  className="flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl shadow-xl shadow-cyan-600/20 transition-all hover:-translate-y-1">
                  <FaWhatsapp className="text-lg" /> Book Free Consultation
                </button>
                <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 border-2 border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white font-bold rounded-2xl hover:border-cyan-500 transition-all">
                  View Plans
                </button>
              </motion.div>

              {/* Quick stats */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((s, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5">
                    <div className="text-2xl font-black text-gray-900 dark:text-white">{s.val}</div>
                    <div className="text-xs text-gray-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full group-hover:bg-cyan-500/30 transition-all duration-700" />
              <img src={cloudKitchenImg} alt="Cloud Kitchen Setup"
                className="w-full rounded-[2.5rem] shadow-2xl dark:shadow-cyan-900/30 object-cover aspect-[4/3] relative z-10 border border-white/20 hover:scale-[1.01] transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ──────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">Why Most Cloud Kitchens Fail</h2>
              <p className="text-gray-600 dark:text-slate-400 font-medium">Most food businesses start without research, branding, or a growth strategy. Here's what kills them:</p>
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-slate-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {/* Solution */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[2.5rem] p-10 text-white space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl font-black leading-tight relative z-10">Our Solution</h2>
              <p className="text-cyan-50 text-lg leading-relaxed font-medium relative z-10">
                We validate demand, build a strong brand, optimize operations, and scale you profitably. You focus on food — we handle everything else.
              </p>
              <div className="space-y-3 relative z-10">
                {["Data-driven location selection", "End-to-end brand building", "Zomato/Swiggy optimization", "Legal & compliance fast-track", "Performance marketing & retention"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-cyan-50 font-semibold">
                    <FaCheckCircle className="text-cyan-200 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <button onClick={handleConsult} className="relative z-10 w-full bg-white text-cyan-700 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl">
                Get Your Kitchen Growth Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">7 Services. One Partner. Full Execution.</h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">We don't just advise — we execute. From research to revenue, we are your Cloud Kitchen Business Partner.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-4 right-5 text-[10px] font-black tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-100 dark:border-cyan-800/30">
                  {s.tag}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
            {/* CTA card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-cyan-600 to-blue-700 text-white flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-all shadow-xl"
              onClick={handleConsult}>
              <div>
                <FaStar className="text-3xl text-cyan-200 mb-6" />
                <h3 className="text-2xl font-black mb-3">Not sure where to start?</h3>
                <p className="text-cyan-100 text-sm leading-relaxed">Book a free 30-min strategy call. We'll build your custom Cloud Kitchen launch plan.</p>
              </div>
              <button className="mt-8 bg-white text-cyan-700 font-bold py-3 rounded-2xl hover:bg-cyan-50 transition-colors">
                Book Free Call →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">Our Process</p>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">From Idea to Orders — 5 Steps</h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/40 to-blue-500/10 -translate-x-1/2" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 items-start ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-row`}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-600/20 z-10">
                    {step.num}
                  </div>
                  <div className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 flex-1 hover:border-cyan-400/30 transition-all shadow-sm`}>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                    <p className="text-gray-600 dark:text-slate-400 font-medium">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">Choose Your Package</h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg">Pricing is customised based on your city, kitchen size, and requirements. <br className="hidden md:block" /><strong className="text-gray-800 dark:text-white">Get a free quote — no obligation.</strong></p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-[2rem] bg-white dark:bg-slate-900 border-2 ${plan.color} flex flex-col`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-cyan-600 text-white text-xs font-black rounded-full tracking-widest uppercase shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 font-medium mb-4">{plan.subtitle}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/40 rounded-xl">
                    <FaWhatsapp className="text-cyan-600 dark:text-cyan-400" />
                    <span className="text-cyan-700 dark:text-cyan-300 font-bold text-sm">Custom Quote on Request</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300 font-medium">
                      <FaCheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handlePlan(plan.name)}
                  className={`w-full py-4 rounded-2xl font-bold text-base transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 ${plan.btnColor}`}>
                  <FaWhatsapp /> Request Quote for {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 dark:text-slate-400 mt-8 text-sm font-medium">
            Also available: Monthly Consulting & Revenue Share model. <button onClick={handleConsult} className="text-cyan-600 dark:text-cyan-400 font-bold underline underline-offset-2 hover:text-cyan-700">Talk to us →</button>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Ready to Build a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Food Brand That Scales?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From Idea to Orders — We Build Cloud Kitchen Brands That Scale. Don't just open a kitchen. Build a brand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={handleConsult}
              className="flex items-center gap-3 px-10 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-[2rem] shadow-2xl shadow-cyan-600/20 transition-all hover:-translate-y-1 text-lg">
              <FaWhatsapp className="text-xl" /> Book Free Strategy Call
            </button>
            <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 border-2 border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white font-bold rounded-[2rem] hover:border-cyan-500 transition-all text-lg">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudKitchenDetails;
