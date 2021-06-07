import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://1tp4z.sse.codesandbox.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});