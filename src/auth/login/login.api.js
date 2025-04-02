// src/auth/api/login.api.js
import client from "../../client/client";
export const login = async (email, password) => {
    try {
        const response = await client.post('/api/users/auth/sign-in', {
            email,
            password
        });
        console.log('Login Successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
        throw error;
    }
};
