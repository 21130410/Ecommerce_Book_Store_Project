import axiosClient from "./axiosClient";

const commentApi = {
  createComment(params) {
    const url = "comments";
    return axiosClient.post(url, params );
  },
  getComments(productId) {
    const url = `comments/product/${productId}`;
    return axiosClient.get(url );
  },
  replyComment(parentId,replyCommentData) {
    const url = `comments/${parentId}/replies`;
    return axiosClient.post(url,replyCommentData );
  },
  
};

export default commentApi;
