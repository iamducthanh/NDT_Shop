import { axiosClient } from './axiosClient';

const aoKhoacApi = {
    getAllAo() {
        const url = `/ao-khoac`;
        return axiosClient.get(url);
    },
    // getToPageAndDESC(page){
    //     const url = `/ao-khoac?_sort=price&_order=desc&_page=${page}&_limit=8`;
    //     return axiosClient.get(url);
    // },
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