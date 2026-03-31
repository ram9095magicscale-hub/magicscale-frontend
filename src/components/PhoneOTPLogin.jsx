import React, { useState, useEffect } from 'react';

import { auth } from './firebase'; // your firebase.js
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const PhoneOTPLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  // Setup reCAPTCHA once before sending OTP
 useEffect(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha',
      {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved');
        },
      },
      auth // ✅ very important
    );

    window.recaptchaVerifier.render().then(widgetId => {
      window.recaptchaWidgetId = widgetId;
    });
  }
}, []);

  const handleSendOTP = async () => {
  
    const appVerifier = window.recaptchaVerifier;
    const fullPhone = "+91" + phone; // adjust for your country

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmation(confirmationResult);
      alert('OTP sent to ' + fullPhone);
    } catch (err) {
      console.error('OTP send error:', err);
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const result = await confirmation.confirm(otp);
      const user = result.user;

      // ✅ Auto-login: Save token to localStorage
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        phone: user.phoneNumber,
      }));

      alert('Login successful!');
      // Optionally: redirect user here
    } catch (err) {
      console.error('OTP verification failed:', err);
      alert('Invalid OTP');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login with Phone</h2>

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone (e.g. 9876543210)"
        className="w-full p-2 border mb-2"
      />

      <button
        onClick={handleSendOTP}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full"
      >
        Send OTP
      </button>

      {confirmation && (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-2 border mb-2"
          />
          <button
            onClick={handleVerifyOTP}
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Verify OTP
          </button>
        </>
      )}

      {/* Invisible reCAPTCHA container */}
      <div id="recaptcha"></div>
    </div>
  );
};

export default PhoneOTPLogin;


