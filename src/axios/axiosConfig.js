import axios from 'axios';

const axiosConfig = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL
});
axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

export default axiosConfig;
