import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: ' http://192.168.43.38:3005',
    headers: {
        'Content-Type': 'application/json',
    },
});