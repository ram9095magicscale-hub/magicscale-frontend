
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { authAPI } from '../../services/api';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      const data = await authAPI.register({ name, email, password });

      alert(data.message || 'Signup successful!');
      navigate('/verify-otp', { state: { email } });
    } catch (err) {
      console.error('Signup error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white dark:from-slate-900 dark:to-slate-950 relative transition-colors duration-500">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-50 dark:opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10 w-[90%] sm:w-full max-w-md bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-xl shadow-xl dark:shadow-2xl border border-transparent dark:border-gray-800 mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-indigo-400 mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
            <FaUser className="mr-3 text-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
            />
          </div>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
            <FaEnvelope className="mr-3 text-gray-600 dark:text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
            />
          </div>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
            <FaLock className="mr-3 text-gray-600 dark:text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
            />
          </div>

          {error && <p className="text-red-600 text-sm -mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-700 dark:bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 dark:text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
