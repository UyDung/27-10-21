import axiosClient from "./axiosClient";

const url = "https://project-2532894124166455430-default-rtdb.firebaseio.com/products.json";

const productApi = {
    getAll: (params) => {
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        return axiosClient.get(url, id);
    },

    add: ({ id, title, image, previewDescription, detailDescription, price }) => {
        return axiosClient.post(url, { id, title, image, previewDescription, detailDescription, price });
    },
    post: (params) => {
        return axiosClient.post(url, { params });
    },
};

export default productApi;
