import { axiosClient } from './axiosClient';

const sanPhamApi = {
    getSPById(id, sp){
        const url = `/${sp}/${id}`;
        console.log(url);
        return axiosClient.get(url);
    }
}
export default sanPhamApi;