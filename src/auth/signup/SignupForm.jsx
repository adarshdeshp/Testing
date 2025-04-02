import React, { useState } from 'react';
import { signup } from './signup.api';

const SignupForm = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        setError('');
        setSuccessMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await signup(
                formState.email,
                formState.password,
                formState.firstName,
                formState.lastName
            );
            console.log('Result: ', result);
            setSuccessMessage('User signed up successfully!');
        } catch (error) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        </div>
    );
};

export default SignupForm;
