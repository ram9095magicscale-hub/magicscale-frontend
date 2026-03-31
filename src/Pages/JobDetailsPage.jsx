import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { jobPosts } from "../data/jobData";
import { ArrowLeft, MapPin, Clock, Upload, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "Freshers / Less than 1 year"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJob = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/jobs");
        const foundJob = res.data.find((p) => p._id === id || p.id === id);
        // Fallback to local data if backend doesn't have it (for demo data)
        setJob(foundJob || jobPosts.find((p) => p.id === id));
      } catch (err) {
        console.error("Failed to fetch jobs", err);
        setJob(jobPosts.find((p) => p.id === id));
      }
    };
    fetchJob();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("experience", formData.experience);
    data.append("jobTitle", job.title);
    data.append("jobId", job.id);
    data.append("resume", file);

    try {
      // Using the local backend or the production one
      const apiURL = window.location.hostname === "localhost" 
        ? "http://localhost:3000/api/careers/apply"
        : "https://magicscale-backend.onrender.com/api/careers/apply";

      await axios.post(apiURL, data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.response?.data?.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins">

      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 py-12">
          {/* Back button */}
          <Link 
            to="/careers" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Content: Job details */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                      {job.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase">
                        <Clock size={14} /> {job.type}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-bold uppercase">
                        <MapPin size={14} /> {job.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: job.fullDescription }}
                />
              </section>
            </div>

            {/* Right Content: Application Form */}
            <div className="relative">
              <div className="sticky top-32 p-8 md:p-10 bg-gray-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-gray-200 dark:border-slate-800 shadow-xl shadow-gray-200/20 dark:shadow-none">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for this role</h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Years of Experience</label>
                          <select 
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                          >
                            <option>Freshers / Less than 1 year</option>
                            <option>1-3 years</option>
                            <option>3-5 years</option>
                            <option>5+ years</option>
                          </select>
                        </div>

                        {/* Resume Upload */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Resume / CV</label>
                          <div 
                            onClick={() => fileInputRef.current.click()}
                            className="w-full px-5 py-8 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group"
                          >
                            <input 
                              type="file" 
                              ref={fileInputRef}
                              onChange={handleFileUpload}
                              className="hidden" 
                              accept=".pdf,.doc,.docx"
                            />
                            {fileName ? (
                              <div className="text-center">
                                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={32} />
                                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate max-w-[200px]">{fileName}</p>
                                <p className="text-[10px] text-indigo-600 dark:text-indigo-400 mt-1 uppercase">Click to change</p>
                              </div>
                            ) : (
                              <>
                                <Upload className="text-gray-400 group-hover:text-indigo-500 group-hover:scale-110 transition-all" size={32} />
                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 text-center">
                                  Drag and drop or <span className="text-indigo-600 underline">browse</span>
                                </p>
                                <p className="text-[10px] text-gray-400 uppercase">PDF, DOC (Max 5MB)</p>
                              </>
                            )}
                          </div>
                        </div>

                        {error && (
                          <p className="text-red-500 text-xs font-bold text-center mb-4">{error}</p>
                        )}

                        <button 
                          disabled={isSubmitting}
                          type="submit" 
                          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:bg-gray-400 transition-all shadow-lg shadow-indigo-200 dark:shadow-none mt-4"
                        >
                          {isSubmitting ? "Submitting..." : <><Send size={18} /> Submit Application</>}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={48} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black text-gray-900 dark:text-white">Application Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Thank you for applying for the <strong>{job.title}</strong> role. Our recruitment team will review your profile and get back to you soon.
                        </p>
                      </div>
                      <Link 
                        to="/careers"
                        className="inline-block px-8 py-4 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        Explore More Roles
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
