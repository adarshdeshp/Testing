// src/client/client.js
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://walrus-app-3bwyd.ondigitalocean.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default client;
