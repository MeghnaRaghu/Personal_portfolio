// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/',  // Your Spring Boot API URL
});

export default axiosInstance;
