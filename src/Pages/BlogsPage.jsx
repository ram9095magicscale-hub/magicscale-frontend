import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import axios from "axios";
import { API_URL } from "../services/api";

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blogs`);
        setBlogPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };
    fetchBlogs();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(`${API_URL}/newsletter`, { email });
      setStatus({ type: "success", message: res.data.message });
      setEmail("");
    } catch (err) {
      setStatus({ 
        type: "error", 
        message: err.response?.data?.message || "Something went wrong. Please try again." 
      });
    } finally {
      setSubscribing(false);
      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins text-left">

      
      <main className="pt-20">
        {/* Elegant Hero Section */}
        <div className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-100/50 dark:bg-sky-500/5 rounded-full blur-[100px] translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-none"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest"
                    >
                        Industry Insights
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1]"
                    >
                        Scaling Knowledge for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Food Entrepreneurs</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore our latest articles on cloud kitchen growth, delivery platform optimization, and legal compliance in the food industry.
                    </motion.p>
                </div>
            </div>
        </div>

        {/* Blog Grid */}
        <section className="pb-32 px-6 sm:px-12 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, idx) => (
                <div key={post._id || idx}>
                  <BlogCard 
                    id={post._id || post.id}
                    title={post.title}
                    excerpt={post.excerpt || post.content}
                    date={new Date(post.createdAt).toLocaleDateString()}
                    image={post.coverImage ? (post.coverImage.startsWith('http') ? post.coverImage : `${API_URL.replace('/api', '')}${post.coverImage}`) : "https://via.placeholder.com/400x250?text=Blog"}
                    author={post.author || "Admin"}
                    category={post.category || "General"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 px-6 relative overflow-hidden bg-gray-50/50 dark:bg-slate-900/30 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">Stay Updated</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Subscribe to get the latest restaurant consulting tips directly to your inbox.</p>
                <form onSubmit={handleSubscribe} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="px-6 py-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                    />
                    <button 
                        type="submit"
                        disabled={subscribing}
                        className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {subscribing ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>
                {status.message && (
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 text-sm font-medium ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}
                    >
                        {status.message}
                    </motion.p>
                )}
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogsPage;
