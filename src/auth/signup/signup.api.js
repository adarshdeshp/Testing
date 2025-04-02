import client from "../../client/client";

export const signup = async (email, password, firstName = '', lastName = '') => {
    try {
        const response = await client.post('/api/users/create/', {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
        });
        console.log('Signup Successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error.response?.data || error.message);
        throw error;
    }
};
