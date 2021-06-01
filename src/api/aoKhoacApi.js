import { axiosClient } from './axiosClient';

const aoKhoacApi = {
    getAllAo() {
        const url = `/aokhoac`;
        return axiosClient.get(url);
    },
    getToPage(page) {
        const url = `/aokhoac?_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },
    add(aoKhoac) {
        const url = `/aokhoac`;
        return axiosClient.post(url, aoKhoac);
    },
    remove(id) {
        const url = `/aokhoac/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/posts/${id}`;
        // console.log(data);
        return axiosClient.put(url, data);
    },
    fullTextSearch({ keyword }) {
        const url = `/posts?q=${keyword}`;
        console.log(url);
        return axiosClient.get(url)
    }
}
export default aoKhoacApi;