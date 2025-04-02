import client from "../../client/client";

export const passwordReset = async (email) => {
    try {
        const response = await client.post('/api/users/auth/password-reset/', { email });
        console.log('Password Reset Successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during password reset:', error.response?.data || error.message);
        throw error;
    }
};
