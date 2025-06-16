import axiosClient from "./axiosClient";

const orderApi = {

  async get(userId) {
    const url = `orders/${userId}`;
    return await axiosClient.get(url);
  },
};

export default orderApi;
