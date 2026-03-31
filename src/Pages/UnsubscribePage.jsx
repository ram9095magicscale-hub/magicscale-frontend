import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState({ loading: true, success: false, message: '' });
  const email = searchParams.get('email');

  useEffect(() => {
    const handleUnsubscribe = async () => {
      if (!email) {
        setStatus({ loading: false, success: false, message: 'Invalid or missing email address.' });
        return;
      }

      try {
        const res = await axios.get(`https://magicscale-backend.vercel.app/api/newsletter?email=${email}`);
        setStatus({ loading: false, success: true, message: res.data.message });
      } catch (err) {
        setStatus({ 
          loading: false, 
          success: false, 
          message: err.response?.data?.message || 'Error occurred while unsubscribing.' 
        });
      }
    };

    handleUnsubscribe();
  }, [email]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto bg-gray-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-gray-100 dark:border-white/5 text-center shadow-xl">
          {status.loading ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Processing your request...</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${status.success ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                {status.success ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                )}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {status.success ? 'Successfully Unsubscribed' : 'Unsubscribe Failed'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {status.message}
              </p>
              <Link 
                to="/" 
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
              >
                Back to Home
              </Link>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnsubscribePage;
