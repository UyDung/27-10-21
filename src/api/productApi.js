import axiosClient from "./axiosClient";

const url = "/products.json";

const productApi = {
    getAll: (params) => {
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const getUrl = `${url}/${id}`;
        return axiosClient.get(url);
    },

    add: ({ id, title, image, previewDescription, detailDescription, price }) => {
        return axiosClient.post(url, { id, title, image, previewDescription, detailDescription, price });
    },
};

export default productApi;
