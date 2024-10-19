// src/utils/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, // Enables cookies to be sent with requests
});

export default instance;
