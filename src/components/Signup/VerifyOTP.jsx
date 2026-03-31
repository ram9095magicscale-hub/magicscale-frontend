// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const VerifyOtp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email || '';

//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleVerify = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:3000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setSuccess(data.message || 'OTP verified. Account activated.');
//         setError('');
//         setTimeout(() => navigate('/login'), 1500);
//       } else {
//         setError(data.message || 'OTP verification failed');
//         setSuccess('');
//       }
//     } catch (err) {
//       console.error('Verification error:', err);
//       setError('Server error. Please try again.');
//     }
//   };

//   if (!email) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-red-50">
//         <p className="text-red-600 text-lg font-medium">No email found. Please sign up again.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white relative">
//       <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

//       <div className="relative z-10 w-full max-w-md bg-white p-10 rounded-xl shadow-xl">
//         <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Verify OTP</h2>

//         <p className="text-center text-sm text-gray-600 mb-4">
//           OTP sent to <strong>{email}</strong>
//         </p>

//         <form onSubmit={handleVerify} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           {success && <p className="text-green-600 text-sm">{success}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
//           >
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;





import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const data = await authAPI.verifyOTP({ email, otp });

      setSuccess(data.message || 'OTP verified. Account activated.');
      setError('');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message || 'OTP verification failed');
      setSuccess('');
    }
  };

  const handleResend = async () => {
    try {
      const data = await authAPI.resendOTP({ email });
      setSuccess(data.message || 'OTP resent to your email.');
      setError('');
    } catch (err) {
      console.error('Resend error:', err);
      setError(err.message || 'Failed to resend OTP');
      setSuccess('');
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-red-600 text-lg font-medium">No email found. Please sign up again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white relative">
      {/* Decorative blur */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Verify OTP</h2>

        <p className="text-center text-sm text-gray-600 mb-4">
          OTP sent to <strong>{email}</strong>
        </p>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <p className="text-sm text-center text-gray-600 mt-2">
            Didn't receive OTP?{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-700 underline hover:text-blue-900"
            >
              Resend OTP
            </button>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
