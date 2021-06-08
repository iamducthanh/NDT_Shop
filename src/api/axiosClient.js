import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://nsxg2.sse.codesandbox.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});