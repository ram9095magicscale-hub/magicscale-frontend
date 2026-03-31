import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogData"; // Fallback data
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import axios from "axios";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const res = await axios.get("https://magicscale-backend.vercel.app/api/blogs");
        let foundPost = res.data.find((p) => p._id === id || p.id === id);
        
        if (foundPost) {
          foundPost = {
            ...foundPost,
            date: foundPost.createdAt ? new Date(foundPost.createdAt).toLocaleDateString() : foundPost.date,
            image: foundPost.coverImage ? (foundPost.coverImage.startsWith('http') ? foundPost.coverImage : `https://magicscale-backend.vercel.app${foundPost.coverImage}`) : foundPost.image || "https://via.placeholder.com/1200x600?text=Blog",
            author: foundPost.author || "Admin",
            category: foundPost.category || "General"
          };
        } else {
          foundPost = blogPosts.find((p) => p.id === id);
        }
        setPost(foundPost);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
        setPost(blogPosts.find((p) => p.id === id));
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
         <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <Link to="/blogs" className="mt-4 text-indigo-600 dark:text-indigo-400 font-bold block">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins overflow-x-hidden">

      
      <main className="pt-20">
        {/* Article Hero */}
        <div className="relative py-20 px-6 sm:px-12 md:px-24 overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-100/50 dark:bg-sky-500/5 rounded-full blur-[100px] translate-y-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                <Link to="/blogs" className="group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={18} />
                    Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
                >
                    {post.category}
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] text-center"
                >
                    {post.title}
                </motion.h1>

                <div className="mt-10 pt-10 border-t border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest w-full">
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={18} className="text-indigo-600 dark:text-indigo-400" />
                        <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
                        <span>7 min read</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Article Image Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 md:mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[16/9] rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5"
            >
                <img src={post.image} alt={post.title} className="w-full h-full object-cover shadow-inner" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
        </div>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto px-6 pb-32">
            <div 
                className="prose prose-lg md:prose-xl dark:prose-invert prose-indigo max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-center
                prose-h3:text-gray-900 dark:prose-h3:text-white prose-h3:font-black prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:text-center
                prose-p:mb-8 prose-p:text-lg mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Share2 size={20} />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs">Share Article</span>
                </div>
                <div className="flex gap-4">
                    {/* Share Buttons would go here */}
                </div>
            </div>
        </div>

        {/* Related Posts Link */}
        <section className="bg-indigo-50/30 dark:bg-indigo-900/10 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-8">Ready to grow your restaurant?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">MagicScale helps foodbrands across India launch and scale profitably on digital delivery platforms.</p>
                <Link to="/services" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all inline-block">
                    Explore Our Services
                </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
