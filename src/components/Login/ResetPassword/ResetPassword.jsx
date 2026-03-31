// ResetPassword.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/auth/reset-password/${token}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    setMessage(data.msg || 'Something went wrong');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password" required />
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ResetPassword;
