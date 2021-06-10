import { axiosClient } from './axiosClient';

const hoaDonApi = {
    getHoaDonByUsername(username){
        const url = `hoa-don?username=${username}`;
        return axiosClient.get(url);
    },

    getHoaDonByTrangThai(trangThai){
        const url = `hoa-don?trangThai=${trangThai}`;
        return axiosClient.get(url);
    },

    getDonHangByKhachHang(name){
        const url = `hoa-don?q=${name}`;
        return axiosClient.get(url);
    },

    getHoaDonByPage(page){
        const url = `hoa-don?_page=${page}&_limit=10000`;
        return axiosClient.get(url);
    },

    addHoaDon(data) {
        const url = `/hoa-don`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/hoa-don/${id}`;
        return axiosClient.delete(url);
    },

    update(id, data) {
        const url = `/hoa-don/${id}`;
        return axiosClient.put(url, data);
    }
}
export default hoaDonApi;