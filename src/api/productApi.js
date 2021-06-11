import { axiosClient } from './axiosClient';

const productApi = {
    getAllAo() {
        const url = `/product`;
        return axiosClient.get(url);
    },
    getByKhoangGiaAndPage(sp,min, max, page){
        const url = `/product?loaisp=${sp}&price_gte=${min}&price_lte=${max}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToSearchAndPage(sp,keySearch, page){
        const url = `/product?loaisp=${sp}&q=${keySearch}&_page=${page}&_limit=8`;
        console.log(url);
        return axiosClient.get(url);
    },
    getToPageAndSoft(sp,page, order){
        const url = `/product?loaisp=${sp}&_sort=price&_order=${order}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToFillAndSortAnhPage(sp,min, max, order, page){
        const url = `/product?loaisp=${sp}&price_gte=${min}&price_lte=${max}&_sort=price&_order=${order}&_page=${page}&_limit=8`;
        console.log(url);
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    getToPage(sp,page) {
        const url = `/product?loaisp=${sp}&_page=${page}&_limit=8`;
        console.log(url);
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/product`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/product/${id}`;
        return axiosClient.put(url, data);
    }
}
export default productApi;