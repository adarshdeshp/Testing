import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './auth/login/LoginForm';
import Logout from './auth/logout/Logout';
import SignupForm from './auth/signup/SignupForm';
import PasswordResetForm from './auth/passwordReset/PasswordResetForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/password-reset" element={<PasswordResetForm />} />
            </Routes>
        </Router>
    );
};

export default App;
