import axiosClient from "./axiosClient";

const paymentApi = {
  async payment( orderTotal, orderInfor) {
    const params = {
      orderTotal: orderTotal,
      orderInfor: orderInfor,
    };
    const res = await axiosClient.get("payment/create-order", { params });

    return res;
  },
  async paymentResult(params) {
    const url = `payment/vnpay-payment-return?${params}`;
    console.log("url: ", url);
    const res = await axiosClient.get(url);
    console.log("res: ", res);

    return res;
  },
};

export default paymentApi;
