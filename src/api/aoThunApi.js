import { axiosClient } from './axiosClient';

const aoThunApi = {
    getAllAo() {
        const url = `/ao-thun`;
        return axiosClient.get(url);
    },
    getByKhoangGiaAndPage(min, max, page){
        const url = `/ao-thun?price_gte=${min}&price_lte=${max}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToSearchAndPage(keySearch, page){
        const url = `/ao-thun/?q=${keySearch}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getToPageAndSoft(page, order){
        const url = `/ao-thun?_sort=price&_order=${order}&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/ao-thun/${id}`;
        return axiosClient.get(url);
    },
    getToPage(page) {
        const url = `/ao-thun?_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    add(aoKhoac) {
        const url = `/ao-thun`;
        return axiosClient.post(url, aoKhoac);
    },
    remove(id) {
        const url = `/ao-thun/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/ao-thun/${id}`;
        return axiosClient.put(url, data);
    }
}
export default aoThunApi;