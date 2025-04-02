// src/client/client.js

import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const client = axios.create({
    baseURL: baseURL, 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default client;
