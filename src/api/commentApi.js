import { axiosClient } from './axiosClient';

const commentApi = {
    getCommentByIdSP(id, sp, page) {
        const url = `/comment?idProduct=${id}&loaiSP=${sp}&_sort=ngayThang&_order=desc&_page=${page}&_limit=8`;
        return axiosClient.get(url);
    },

    addComment(comment) {
        const url = `/comment`;
        return axiosClient.post(url, comment);
    },

}
export default commentApi;