import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://zg229.sse.codesandbox.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});