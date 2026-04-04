import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { authAPI } from '../../services/api';
import { useAuth } from '../context/AuthContext/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await authAPI.login({ email, password });
      
      // Update global auth state
      login(data.user, data.token);

      // 1. Check if there's a specific page we should return to (e.g., from ProtectedRoute)
      const redirectPath = location.state?.from?.pathname || location.state?.from || null;
      
      if (redirectPath && redirectPath !== '/') {
        console.log('Redirecting to previous location:', redirectPath);
        navigate(redirectPath, { replace: true });
        return;
      }

      // 2. Default Redirect based on role
      const dashboardPath = (data.user?.role === 'seller' || data.user?.role === 'admin') 
        ? '/SellerDashboard' 
        : '/dashboard';
        
      navigate(dashboardPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white dark:from-slate-900 dark:to-slate-950 relative transition-colors duration-500">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-50 dark:opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-[90%] md:w-full max-w-6xl bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl rounded-xl overflow-hidden border border-transparent dark:border-gray-800 mx-auto my-8">
        {/* Left Section */}
        <div className="hidden md:flex w-full md:w-1/2 p-6 md:p-10 flex-col justify-center bg-blue-50 dark:bg-slate-800/50">
          <div className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 font-logo tracking-wide">
            <span className="text-blue-600 dark:text-blue-400">Magic</span> Scale
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            We help restaurants onboard faster and grow their business. <br />
            From setup to branding to full tech support — all in one smart platform.
          </p>
        </div>

        {/* Right Section (Login) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center dark:bg-[#0f172a]">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-6 font-logo">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border border-gray-300 dark:border-slate-700 rounded-xl p-3 bg-gray-50 dark:bg-slate-800/50 transition-colors">
              <FaEnvelope className="mr-3 text-gray-500 dark:text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border border-gray-300 dark:border-slate-700 rounded-xl p-3 bg-gray-50 dark:bg-slate-800/50 transition-colors">
              <FaLock className="mr-3 text-gray-500 dark:text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm -mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            <Link to="/forgot-password" size="sm" className="text-blue-700 dark:text-blue-400 hover:underline font-bold">Forgot Password?</Link>
          </p>

          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-700 dark:text-blue-400 hover:underline font-bold">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
