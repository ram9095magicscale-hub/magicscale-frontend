import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Founder, Biryani & Co.",
    quote:
      "MagicScale transformed our online presence. We were live on Zomato and Swiggy in just 3 days. Their team handled everything from documentation to menu setup.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Harsh Mehta",
    role: "Owner, Masala Junction",
    quote:
      "FSSAI, GST, accounts—these guys made compliance feel like a breeze. Their system is structured, responsive, and built for food businesses like ours.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Divya Narayan",
    role: "Chef & Partner, CurryCraft",
    quote:
      "We've tried others before, but MagicScale stands out. They actually *understand* the food industry. Highly recommended for serious food entrepreneurs.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-[#F7F9FF] to-white dark:from-slate-900 dark:to-slate-950 py-28 px-6 sm:px-10 lg:px-20 overflow-hidden transition-colors duration-500">
      {/* Decorative gradient blob background */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-300 opacity-20 blur-[120px] rounded-full z-0 dark:bg-purple-900 dark:opacity-10"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[120px] rounded-full z-0 dark:bg-indigo-900 dark:opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Loved by Food Entrepreneurs
        </motion.h2>

        <p className="text-md text-gray-600 dark:text-gray-400 mb-16 max-w-xl mx-auto">
          Here’s what real restaurateurs and foodpreneurs are saying about
          working with MagicScale.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/60 dark:bg-gray-900/40 border border-purple-100 dark:border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-800 dark:text-gray-200 text-sm italic mb-6 leading-relaxed">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 dark:border-gray-700"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
