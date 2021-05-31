import { axiosClient } from './axiosClient';

const aoKhoacApi = {
    getAllAo() {
        const url = `/aokhoac`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },
    add(post) {
        const url = `/posts/create`;
        return axiosClient.post(url, post);
    },
    remove(id) {
        const url = `/posts/${id}`;
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