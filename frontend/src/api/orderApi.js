import axiosClient from "./axiosClient";

const orderApi = {

    async get(userId) {
        const url = `order/${userId}`;
        return await axiosClient.get(url);
    },
    async create(orderData) {
        const url = `order`;
        return await axiosClient.post(url, orderData);
    }
};

export default orderApi;
