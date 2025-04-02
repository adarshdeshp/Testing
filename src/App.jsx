import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './auth/login/LoginForm';
// import Logout from './auth/logout/Logout';
import SignupForm from './auth/signup/SignupForm';
import PasswordResetForm from './auth/passwordReset/PasswordResetForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                {/* <Route path="/logout" element={<Logout />} /> */}
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/password-reset" element={<PasswordResetForm />} />
                <Route path="/dashboard" element={<div>Dashboard (Protected Route)</div>} />
            </Routes>
        </Router>
    );
};

export default App;
