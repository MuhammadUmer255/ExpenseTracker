import axios from 'axios';

// Backend Server URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Aapka backend is URL par chal raha hai
});

// Request Interceptor: Jab bhi React se backend ko request jaye gi, 
// agar localStorage me JWT token hoga toh yeh automatic headers me 'Bearer token' attach kar de ga.
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;