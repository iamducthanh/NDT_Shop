import { axiosClient } from './axiosClient';

const sanPhamApi = {
    getSPById(id, sp){
        const url = `/product?loaisp=${sp}&id=${id}`;
        console.log(url);
        return axiosClient.get(url);
    },

    getProductRelated(sp, key){
        const url = `product?loaisp=${sp}&q=${key}&_page=1&_limit=2`;
        console.log(url);
        return axiosClient.get(url);
    }
}
export default sanPhamApi;