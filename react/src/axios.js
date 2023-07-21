import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    // Dummy token
    const token = '123';
    config.headers.Authorization = `Bearer ${token}`
})

axiosClient.interceptors.response.use(response => {
    // if everything is okay and user is authorized
    return response;
}, error => {
    // if user is not authorized, throw error or redirect to login page
    if( error.response && error.response.status === 401 ) {
        router.navigate('/login')
        return error;
    }
    throw error;
})

export default axiosClient;