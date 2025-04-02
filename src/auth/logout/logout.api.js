import client from "../../client/client";

export const logout = async () => {
    try {
        const response = await client.post('/api/users/auth/logout/');
        console.log('Logout Successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during logout:', error.response?.data || error.message);
        throw error;
    }
};
