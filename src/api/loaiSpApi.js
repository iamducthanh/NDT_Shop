import { axiosClient } from './axiosClient';

const loaiSpApi = {
    getAllLoaiSp(){
        const url = `/loaisp`;
        return axiosClient.get(url);
    }
}
export default loaiSpApi;