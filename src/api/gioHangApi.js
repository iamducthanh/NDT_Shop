import { axiosClient } from './axiosClient';

const gioHangApi = {
    getAllGioHangByUsername(username) {
        const url = `/cart?username=${username}`;
        return axiosClient.get(url);
    },

    getGioHangById(id) {
        const url = `/cart/${id}`;
        return axiosClient.get(url);
    },

    addGioHang(gioHang) {
        const url = `/cart`;
        return axiosClient.post(url, gioHang);
    },
    
    removeGioHang(id){
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    },

    removeGioHangByUsername(username){
        const url = `/cart?username=${username}`;
        return axiosClient.delete(url);
    },

    updateGioHang(id, data) {
        const url = `/cart/${id}`;
        return axiosClient.put(url, data);
    }


}
export default gioHangApi;