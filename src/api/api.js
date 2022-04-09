import axios from 'axios';
import { logout } from '../utils/logout';
const apiClient = axios.create({
    baseURL : 'http://localhost:4000/api',
    timeout: 1000
});

apiClient.interceptors.request.use((config)=>{
    const userDetails = localStorage.getItem('user')
    if(userDetails)  {
        const token = JSON.parse(userDetails).token
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (err)=> {
    return Promise.reject(err)
});

export const login = async(data)=> {
    try {       
        return await apiClient.post('/auth/login', data);

    } catch (exception) {
        return {
            error: true,
            message:exception.response.data,
        }
    }
}

export const register = async(data)=> {
    try {       
        return await apiClient.post('/auth/register', data);

    } catch (exception) {
        return {
            error: true,
            message:exception.response.data,
        }
    }
}

const checkResponseCode = (exception) => {
         const responseCode = exception?.response?.status
         if(responseCode && (responseCode === 401 || responseCode === 403) ) logout()
}