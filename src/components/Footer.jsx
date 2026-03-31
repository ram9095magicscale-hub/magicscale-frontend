import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { companyDetails } from "../data/companyDetails";

const Footer = () => {
    
    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-[#0f172a] dark:bg-[#070b14] text-slate-300 font-poppins relative border-t border-slate-800">
      
      {/* Top Section: Links & Info */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* About Column */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide">About Us</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            MagicScale is a uniquely positioned consulting company offering end-to-end cloud kitchen setup, Swiggy & Zomato onboarding, strategy & consulting services, and business processes across key culinary functions under one umbrella.
          </p>
        </div>

        {/* Company Links */}
        <div className="lg:mx-auto text-left">
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Company</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/#contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Career</Link></li>
            <li><Link to="/blogs" className="hover:text-indigo-400 transition-colors">Blogs / Case Studies</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="lg:mx-auto text-left">
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Support</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/terms-and-condition" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-indigo-400 transition-colors">Shipping & Delivery</Link></li>
            <li><Link to="/return-policy" className="hover:text-indigo-400 transition-colors">Cancellation</Link></li>
          </ul>
        </div>
        
        {/* Follow Us / Socials */}
        <div className="lg:ml-auto flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Follow Us</h3>
          <p className="text-slate-400 text-sm mb-4">
             Stay updated with our latest news and offers.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-4">
             {companyDetails.social.instagram && (
                <a href={companyDetails.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm">
                   <Instagram size={18} />
                </a>
             )}
             {companyDetails.social.facebook && (
                <a href={companyDetails.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm">
                   <Facebook size={18} />
                </a>
             )}
             {companyDetails.social.linkedin && (
                <a href={companyDetails.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm">
                   <Linkedin size={18} />
                </a>
             )}
             {companyDetails.social.twitter && (
                <a href={companyDetails.social.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm">
                   <Twitter size={18} />
                </a>
             )}
          </div>
        </div>
        
      </div>

      {/* Middle Section: Contact Info Cards */}
      <div className="border-t border-slate-800/80 bg-[#0b101d] dark:bg-[#04070d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 lg:divide-x lg:divide-slate-800">
          
          {/* Address */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:pr-8 group">
            <div className="w-12 h-12 bg-white/5 group-hover:bg-indigo-600/20 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
               <MapPin className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={24} />
            </div>
            <div>
               <h4 className="text-lg font-bold text-white mb-2">Address</h4>
               <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2">{companyDetails.address.country}:</p>
               <p className="text-sm text-slate-400 leading-relaxed mb-2">
                 <span className="text-slate-300 font-medium">{companyDetails.address.label}:</span><br/>
                 {companyDetails.address.line1},<br/>
                 {companyDetails.address.line2}
               </p>
               {companyDetails.address.mapLink && (
                  <a href={companyDetails.address.mapLink} target="_blank" rel="noreferrer" className="text-xs text-indigo-400 hover:text-white transition-colors underline underline-offset-4 inline-block">
                     View on Maps
                  </a>
               )}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:px-8 group">
            <div className="w-12 h-12 bg-white/5 group-hover:bg-indigo-600/20 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
               <Phone className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={24} />
            </div>
            <div>
               <h4 className="text-lg font-bold text-white mb-2">Contact Number</h4>
               <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2">{companyDetails.address.country}:</p>
               <p className="text-sm text-slate-300 tracking-wide mb-1">{companyDetails.phone.primary}</p>
               <p className="text-sm text-slate-300 tracking-wide">{companyDetails.phone.secondary}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:pl-8 group">
            <div className="w-12 h-12 bg-white/5 group-hover:bg-indigo-600/20 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
               <Mail className="text-slate-400 group-hover:text-indigo-400 transition-colors" size={24} />
            </div>
            <div>
               <h4 className="text-lg font-bold text-white mb-2">Email Id</h4>
               <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2">General Inquiry:</p>
               <a href={`mailto:${companyDetails.email.general}`} className="text-sm text-slate-300 hover:text-white tracking-wide transition-colors block mb-1 inline-block sm:block">
                 {companyDetails.email.general}
               </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#0f172a] dark:bg-[#070b14] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
             <p>Copyright © {new Date().getFullYear()} {companyDetails.fullLegalName}. All Rights Reserved.</p>
             <p className="flex items-center gap-3">
                <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link> 
                <span className="text-slate-700">|</span> 
                <Link to="/terms-and-condition" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link>
             </p>
          </div>
      </div>

      {/* Back to Top */}
      <button 
         onClick={scrollToTop}
         className="absolute right-6 -top-6 w-12 h-12 bg-[#1e293b] border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 flex items-center justify-center rounded-full text-slate-400 hover:text-white shadow-xl transition-all z-50 group shadow-black/50"
         aria-label="Back to top"
      >
         <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

    </footer>
  );
};

export default Footer;
