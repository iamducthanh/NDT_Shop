import { axiosClient } from './axiosClient';

const aoKhoacApi = {
    getAllAo() {
        const url = `/ao-khoac`;
        return axiosClient.get(url);
    },
    getByKhoangGiaAndPage(min, max, page){
        const url = `/ao-khoac?price_gte=${min}&price_lte=${max}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToSearchAndPage(keySearch, page){
        const url = `/ao-khoac/?q=${keySearch}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToPageAndSoft(page, order){
        const url = `/ao-khoac?_sort=price&_order=${order}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/ao-khoac/${id}`;
        return axiosClient.get(url);
    },
    getToPage(page) {
        const url = `/ao-khoac?_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    add(aoKhoac) {
        const url = `/ao-khoac`;
        return axiosClient.post(url, aoKhoac);
    },
    remove(id) {
        const url = `/ao-khoac/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/ao-khoac/${id}`;
        return axiosClient.put(url, data);
    },
    fullTextSearch({ keyword }) {
        const url = `/posts?q=${keyword}`;
        console.log(url);
        return axiosClient.get(url)
    }
}
export default aoKhoacApi;