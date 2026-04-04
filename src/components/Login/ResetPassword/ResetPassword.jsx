// ResetPassword.jsx
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { API_URL } from '../../../services/api';
import './ResetPassword.css';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match' });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', message: 'Password reset successfully!' });
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setStatus({ type: 'error', message: data.msg || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="reset-password-card"
      >
        <div className="reset-password-header">
          <div className="branding-logo">
            <span className="magic-text">Magic</span>
            <span className="scale-text">Scale</span>
          </div>
          <h2>Reset Your Password</h2>
          <p>Please enter your new strong password below to regain access to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="New Password" 
              required 
              disabled={loading || status.type === 'success'}
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="input-group">
            <ShieldCheck className="input-icon" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
              placeholder="Confirm New Password" 
              required 
              disabled={loading || status.type === 'success'}
            />
          </div>

          <AnimatePresence mode="wait">
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`status-message ${status.type}`}
              >
                {status.type === 'success' ? <CheckCircle2 size={16} /> : null}
                <span>{status.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            type="submit" 
            disabled={loading || status.type === 'success'}
            className={`submit-btn ${loading ? 'loading' : ''}`}
          >
            {loading ? 'Processing...' : (
              status.type === 'success' ? 'Password Updated!' : (
                <>
                  <span>Update Password</span>
                  <ArrowRight size={18} />
                </>
              )
            )}
          </button>
        </form>

        <div className="reset-password-footer">
          <span>Remember your password? </span>
          <Link to="/login" className="back-link">Back to Login</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ResetPassword;
