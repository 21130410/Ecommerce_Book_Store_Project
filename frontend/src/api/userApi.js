import axiosClient from "./axiosClient";

const userApi = {
  // Đăng nhập
  async signIn(params) {
    const url = "/auth/sign-in";
    try {
      const response = await axiosClient.post(url, params);
      return response.data; // Trả về data thôi cho gọn
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  },

  // Đăng ký
  async signUp(params) {
    const url = "/auth/sign-up";
    try {
      const response = await axiosClient.post(url, params);
      return response.data;
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error;
    }
  },

  // Yêu cầu reset password
  async resetPassword(email) {
    const url = `auth/reset-password/request?email=${encodeURIComponent(email)}`;
    try {
      const response = await axiosClient.post(url);
      return response.data;
    } catch (error) {
      console.error("Error during reset-password:", error);
      throw error;
    }
  },

  // Xác nhận reset password
  async resetPasswordConfirm(token, password, rePassword) {
    const url = `/auth/reset-password/confirm?token=${encodeURIComponent(token)}&password=${password}&rePassword=${rePassword}`;
    try {
      const response = await axiosClient.post(url);
      return response.data;
    } catch (error) {
      console.error("Error during reset-password confirm:", error);
      throw error;
    }
  },

  // Lấy sản phẩm
  async getProducts() {
    const url = "/categories/products";
    return axiosClient.get(url);
  },
};

export default userApi;
