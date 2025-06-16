import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const userApi = {
    getAllUsers: () => axios.get(`${BASE_URL}/users`),
    updateUser: (id, data) => axios.put(`${BASE_URL}/users/${id}`, data),
    getRoles: () => axios.get(`${BASE_URL}/roles`),
    deleteUser: (id) => axios.delete(`http://localhost:8080/api/users/${id}`),
};

export default userApi;