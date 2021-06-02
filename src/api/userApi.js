import { axiosClient } from './axiosClient';

const userApi = {
    getUserByUsername(username) {
        const url = `/user?username=${username}`;
        return axiosClient.get(url);
    },

    addUser(data) {
        const url = `/user`;
        return axiosClient.post(url, data);
    }
}
export default userApi;