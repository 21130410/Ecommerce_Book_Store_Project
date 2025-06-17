import axiosClient from "./axiosClient";

const orderApi = {

    async get(userId) {
        const url = `orders/${userId}`;
        return await axiosClient.get(url);
    },
    async create(orderData) {
        const url = `orders`;
        return await axiosClient.post(url, orderData);
    }
};

export default orderApi;
