import axios from 'axios';

const BASE_URL = 'https://walrus-app-3bwyd.ondigitalocean.app/api/users/auth'; 
export const login = async (email, password) => {
  return axios.post(
    `${BASE_URL}/sign-in/`,
    { email, password },
    { withCredentials: true }
  );
};

export const logout = async () => {
  return axios.post(`${BASE_URL}/logout/`, {}, { withCredentials: true });
};
