import axios from 'axios';

export const axiosClient = axios.create({
    // baseURL: 'https://yc8vw.sse.codesandbox.io/',
    baseURL: 'http://localhost:3005/',

    headers: {
        'Content-Type': 'application/json',
    },
});