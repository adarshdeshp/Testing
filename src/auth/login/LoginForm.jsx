import React, { useState } from 'react';
import { login } from './login.api'; 
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await login(email, password);
            console.log('User Logged In:', data);
            // Redirect user to dashboard or handle success logic here
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button type="submit">Login</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default LoginForm;
