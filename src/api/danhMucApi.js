import { axiosClient } from './axiosClient';

const danhMucApi = {
    getAllDanhMuc(){
        const url = `/loaisp`;
        return axiosClient.get(url);
    },

    getAllDanhMucById(id){
        const url = `/loaisp/${id}`;
        return axiosClient.get(url);
    },

    addDanhMuc(danhmuc) {
        const url = `/loaisp`;
        return axiosClient.post(url, danhmuc);
    },

    updateDanhMuc(id, data) {
        const url = `/loaisp/${id}`;
        return axiosClient.put(url, data);
    }
}
export default danhMucApi;