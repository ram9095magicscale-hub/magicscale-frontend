import { useEffect, useState } from 'react';
import axios from 'axios';

const AuthToggle = () => {
  const [provider, setProvider] = useState('otp-less');

  useEffect(() => {
    axios.get('/api/admin/auth-provider')
      .then(res => setProvider(res.data.provider));
  }, []);

  const toggleProvider = () => {
    const newProvider = provider === 'otp-less' ? 'firebase' : 'otp-less';
    axios.put('/api/admin/auth-provider', { provider: newProvider })
      .then(res => setProvider(res.data.provider))
      .catch(err => alert("Failed to update provider"));
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">Auth Provider</h2>
      <p>Current: <strong>{provider.toUpperCase()}</strong></p>
      <button onClick={toggleProvider} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        Switch to {provider === 'otp-less' ? 'Firebase' : 'OTP Less'}
      </button>
    </div>
  );
};

export default AuthToggle;
