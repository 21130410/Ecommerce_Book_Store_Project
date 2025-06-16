// src/api/orderApi.js
import axiosClient from "./axiosClient";

const orderApi = {
    getAllOrders: () => axiosClient.get("/orders"),
    confirmOrder: (orderId) => axiosClient.put(`/orders/${orderId}/confirm`)
};

export default orderApi;
