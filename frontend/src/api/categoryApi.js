import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = 'categories';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  async getProducts() {
    const url = '/categories/products';
    return axiosClient.get(url);
  },

  getProductsByCategory(categoryId) {
    const url = `/categories/${categoryId}/products`;
    return axiosClient.get(url);
  }

};

export default categoryApi;