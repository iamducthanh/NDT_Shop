import { axiosClient } from './axiosClient';

const hoaDonApi = {
    getHoaDonByUsername(username){
        const url = `hoa-don?username=${username}`;
        return axiosClient.get(url);
    },
    addHoaDon(data) {
        const url = `/hoa-don`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/hoa-don/${id}`;
        return axiosClient.delete(url);
    }
}
export default hoaDonApi;