import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/iamducthanh/Jsonserver/',
    headers: {
        'Content-Type': 'application/json',
    },
});