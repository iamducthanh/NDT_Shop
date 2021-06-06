import { axiosClient } from './axiosClient';

const jeanApi = {
    getAllAo() {
        const url = `/jeans`;
        return axiosClient.get(url);
    },
    getByKhoangGiaAndPage(min, max, page){
        const url = `/jeans?price_gte=${min}&price_lte=${max}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToSearchAndPage(keySearch, page){
        const url = `/jeans/?q=${keySearch}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToPageAndSoft(page, order){
        const url = `/jeans?_sort=price&_order=${order}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },

    getToFillAndSortAnhPage(min, max, order, page){
        const url = `/jeans?price_gte=${min}&price_lte=${max}&_sort=price&_order=${order}&_page=${page}&_limit=8`;
        console.log(url);
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/jeans/${id}`;
        return axiosClient.get(url);
    },
    getToPage(page) {
        const url = `/jeans?_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    add(aoKhoac) {
        const url = `/jeans`;
        return axiosClient.post(url, aoKhoac);
    },
    remove(id) {
        const url = `/jeans/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/jeans/${id}`;
        return axiosClient.put(url, data);
    }
}
export default jeanApi;