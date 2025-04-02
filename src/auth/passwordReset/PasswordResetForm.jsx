import React, { useState } from 'react';
import { passwordReset } from './passwordReset.api';

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await passwordReset(email);
            if (response.status === 'success') {
                setMessage(response.message || 'Password reset email sent successfully.');
            } else {
                setError(response.message || 'Failed to reset password.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            <h2>Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PasswordResetForm;
