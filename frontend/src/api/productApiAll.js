
import axios from "axios";
const productApiAll = {
    getAll: () => axios.get("http://localhost:8080/api/products/all"),
    getAllCategories: () => axios.get("http://localhost:8080/api/categories"),
    // Có thể thêm các hàm khác nếu cần
};
export default productApiAll;
