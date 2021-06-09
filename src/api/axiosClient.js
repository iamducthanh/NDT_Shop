import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://igkow.sse.codesandbox.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});