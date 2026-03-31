


// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const res = await fetch('https://magicscale-backend.vercel.app/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setMessage('Reset link sent! Check your email.');
        } catch (err) {
            setError(err.message || 'Failed to send reset email.');
        }
    };

    return (
        <div style={{
            maxWidth: 400,
            margin: '40px auto',
            padding: 24,
            border: '1px solid #eee',
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: 10,
                        marginBottom: 12,
                        border: '1px solid #ccc',
                        borderRadius: 4
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: 10,
                        background: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer'
                    }}
                >
                    Send Reset Link
                </button>
            </form>

            {message && <p style={{ color: 'green', marginTop: 12 }}>{message}</p>}
            {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
        </div>
    );
};

export default ForgotPassword;
