import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../../services/api';
import { ShieldCheck, ArrowLeft, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const VerifyOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';

    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const data = await authAPI.verifyOTP({ email, otp });
            setSuccess(data.message || 'OTP verified successfully!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.message || 'Verification failed. Please check the OTP.');
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        try {
            setLoading(true);
            const data = await authAPI.resendOTP({ email });
            setSuccess(data.message || 'OTP resent to your email.');
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to resend OTP');
        } finally {
            setLoading(false);
        }
    };

    if (!email) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 p-4">
                <div className="text-center">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-red-600 dark:text-red-400 text-lg font-bold mb-4">Verification session expired.</p>
                    <Link to="/signup" className="text-indigo-600 font-bold hover:underline">Back to Signup</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-[120px] pb-12 px-4 bg-gray-50 dark:bg-slate-950 flex items-start justify-center transition-colors duration-500">
            {/* Background shape */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 p-8 md:p-10 transition-colors">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <ShieldCheck size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Verify Account</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Enter the 6-digit code sent to <br />
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">{email}</span>
                    </p>
                </div>

                <form onSubmit={handleVerify} className="space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 px-1">
                            OTP Code
                        </label>
                        <input
                            type="text"
                            placeholder="000000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength={6}
                            className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-center text-2xl font-black tracking-[0.5em] text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !!success}
                        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] ${
                            success 
                            ? 'bg-green-500 text-white shadow-lg shadow-green-200 dark:shadow-none'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl'
                        }`}
                    >
                        {loading ? <Loader2 size={20} className="animate-spin" /> : success ? <CheckCircle2 size={20} /> : 'Verify OTP'}
                    </button>
                    
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Didn't receive the code? <br />
                            <button
                                type="button"
                                onClick={handleResend}
                                disabled={loading}
                                className="mt-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline transition-colors"
                            >
                                Resend Code
                            </button>
                        </p>
                    </div>
                </form>

                {success && (
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-2xl flex items-center gap-3 text-green-700 dark:text-green-400">
                        <CheckCircle2 size={20} className="flex-shrink-0" />
                        <p className="text-sm font-medium">{success}</p>
                    </div>
                )}

                {error && (
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 rounded-2xl flex items-center gap-3 text-red-700 dark:text-red-400">
                        <AlertCircle size={20} className="flex-shrink-0" />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <Link to="/signup" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <ArrowLeft size={16} />
                        Back to Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
