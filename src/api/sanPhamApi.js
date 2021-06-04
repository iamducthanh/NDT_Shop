import { axiosClient } from './axiosClient';

const sanPhamApi = {
    getSPById(id, sp){
        const url = `/${sp}/${id}`;
        return axiosClient.get(url);
    },

    getProductRelated(sp, key){
        const url = `${sp}?q=${key}&_page=1&_limit=2`;
        return axiosClient.get(url);
    }
}
export default sanPhamApi;