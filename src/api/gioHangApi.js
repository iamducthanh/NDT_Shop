import { axiosClient } from './axiosClient';

const gioHangApi = {
    getAllGioHangByUsername(username) {
        const url = `/cart?username=${username}`;
        return axiosClient.get(url);
    },

    addGioHang(gioHang) {
        const url = `/cart`;
        return axiosClient.post(url, gioHang);
    }
}
export default gioHangApi;