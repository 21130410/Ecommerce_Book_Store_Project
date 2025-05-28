import axiosClient from './axiosClient';

const productApi = {
  async getProductsByCategory(params = {}) {
    const {
      category = '',
      minPrice = 0,
      maxPrice = 10000000,
      sort = 'ASC',
      page = 1,
      limit = 12,
    } = params;

    const queryParams = { category, minPrice, maxPrice, sort, page, limit };

    const res = await axiosClient.get('products', { params: queryParams });

    return {
      data: res.content,
      pagination: {
        totalPages: res.totalPages,
        currentPage: page,
      },
    };
  },

  async getProductsByName(params = {}) {
    const {
      productName = '',
      minPrice = 0,
      maxPrice = 10000000,
      sort = 'ASC',
      pageNumber = 1,
      limit = 12,
    } = params;

    const queryParams = {
      productName,
      minPrice,
      maxPrice,
      sort,
      page: pageNumber,
      limit,
    };

    const res = await axiosClient.get('products/name', { params: queryParams });

    return {
      data: res.content,
      pagination: {
        totalPages: res.totalPages,
        currentPage: pageNumber,
      },
    };
  },

  get(productId) {
    return axiosClient.get(`/products/${productId}`);
  },

  getProductNameSuggest(suggest = "default") {
    const url = `/products/suggest/${suggest}`;
    return axiosClient.get(url);
  }
};

export default productApi;
