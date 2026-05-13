import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { companyDetails } from "../data/companyDetails";
import { 
  FileText, 
  UserCheck, 
  AlertCircle, 
  Scale, 
  ExternalLink, 
  History, 
  Truck, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

const terms = [
  {
    title: "Terms of Use",
    icon: <FileText className="w-6 h-6 text-indigo-500" />,
    content: `
      By accessing this Website, accessible from <b>magicscale.in</b>, you agree to be bound by these Website Terms and Conditions of Use and accept responsibility for compliance with applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by <b>copyright</b> and <b>trademark laws</b>.
    `,
  },
  {
    title: "Use License",
    icon: <UserCheck className="w-6 h-6 text-blue-500" />,
    content: `
      Permission is granted to temporarily download one copy of the materials on <b>MagicScale’s Website</b> for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:<br>
      - <b>Modify</b> or <b>copy</b> the materials;<br>
      - Use the materials for any <b>commercial purpose</b> or public display;<br>
      - Attempt to <b>reverse-engineer</b> any software contained on MagicScale’s Website;<br>
      - Remove any <b>copyright</b> or proprietary notations from the materials; or<br>
      - Transfer the materials to another person or “mirror” the materials on any other server.<br><br>
      Violation of these restrictions may result in termination of your access rights by MagicScale. Upon termination, any downloaded materials in your possession, whether in printed or electronic format, must be destroyed.
    `,
  },
  {
    title: "Disclaimer",
    icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
    content: `
      All materials on <b>MagicScale’s Website</b> are provided <b>'as is.'</b> MagicScale makes no warranties, either express or implied, and hereby disclaims and negates all other warranties. Furthermore, MagicScale does not make any representations concerning the <b>accuracy</b> or <b>reliability</b> of the use of materials on its Website or otherwise relating to any linked sites.
    `,
  },
  {
    title: "Limitations",
    icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
    content: `
      MagicScale or its suppliers will not be held liable for any <b>damages</b> arising from the use or inability to use materials on MagicScale’s Website, even if MagicScale or an authorized representative has been notified of the possibility of such damage. Jurisdictions that do not allow limitations on implied warranties or liability for incidental damages may not apply to you.
    `,
  },
  {
    title: "Revisions and Errata",
    icon: <History className="w-6 h-6 text-emerald-500" />,
    content: `
      The materials appearing on <b>MagicScale’s Website</b> may include technical, typographical, or photographic errors. MagicScale does not warrant that any materials on its Website are <b>accurate, complete,</b> or <b>current</b>. MagicScale may make changes to the materials on its Website at any time without notice but does not commit to updating them.
    `,
  },
  {
    title: "Links",
    icon: <ExternalLink className="w-6 h-6 text-cyan-500" />,
    content: `
      MagicScale has not reviewed all sites linked to its Website and is not responsible for the contents of any linked site. The inclusion of any link does not imply <b>endorsement</b> by MagicScale. Use of any linked website is at the user's own risk.
    `,
  },
  {
    title: "Site Terms of Use",
    icon: <Scale className="w-6 h-6 text-purple-500" />,
    content: `
      <b>Modifications:</b> MagicScale may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you agree to be bound by the current version of these Terms and Conditions of Use.
    `,
  },
  {
    title: "Governing Law",
    icon: <Globe className="w-6 h-6 text-slate-500" />,
    content: `
      Any claim related to <b>MagicScale’s Website</b> shall be governed by the laws of <b>India</b> without regard to conflict of law provisions.
    `,
  },
  {
    title: "Product Delivery",
    icon: <Truck className="w-6 h-6 text-orange-500" />,
    content: `
      After making payment, you will receive an <b>email</b> with instructions for creating your ID and password to log in to the member area. If you’ve enrolled for a webinar, you will receive the webinar details via <b>WhatsApp</b>, including the date and Zoom link. If you do not receive an email, contact us at <b>support@magicscale.in</b>.
    `,
  },
  {
    title: "Contact Us",
    icon: <Mail className="w-6 h-6 text-indigo-500" />,
    content: `
      If you have any questions or concerns regarding these terms, please contact us:
    `,
    details: [
      { icon: <UserCheck className="w-4 h-4" />, label: companyDetails.founder },
      { icon: <Mail className="w-4 h-4" />, label: companyDetails.email.support },
      { icon: <Phone className="w-4 h-4" />, label: companyDetails.phone.primary },
      { icon: <MapPin className="w-4 h-4" />, label: companyDetails.address.fullAddress },
    ]
  },
];

const Terms = () => {
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
              Terms of <span className="text-indigo-600 dark:text-indigo-400">Service</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Please read these terms and conditions carefully before using our services. By using Magic Scale, you agree to these terms.
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
              {terms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300"
                  id={term.title.toLowerCase().replace(/\s+/g, '-')}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {term.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {term.title}
                    </h2>
                  </div>
                  
                  <div 
                    className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 prose prose-slate dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: term.content }}
                  />

                  {term.details && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {term.details.map((detail, idx) => (
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
                  {terms.map((term, index) => (
                    <a
                      key={index}
                      href={`#${term.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium">{term.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200 dark:shadow-none overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Need Clarification?</h3>
                <p className="text-indigo-100 text-sm mb-4 relative z-10">
                  Our legal team is available to answer any questions regarding our terms.
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

export default Terms;

