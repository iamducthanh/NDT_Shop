import { axiosClient } from './axiosClient';

const userApi = {
    getAllUser() {
        const url = `/user`;
        return axiosClient.get(url);
    },

    getUserByUsername(username) {
        const url = `/user?username=${username}`;
        return axiosClient.get(url);
    },

    getUserByEmail(mail) {
        const url = `/user?email=${mail}`;
        return axiosClient.get(url);
    },

    update(data, id) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data);
    },

    addUser(data) {
        const url = `/user`;
        return axiosClient.post(url, data);
    }
}
export default userApi;