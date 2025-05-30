import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
// import LoadingProducts from "./components/Loading";
import ProductList from "../../components/ProductList/ProductList";
// import Sort from "./components/Sort";
// import Filters from "./components/Filters";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { favouritesSelector } from "../../store/Selectors";
import "./FavouriteProductsPage.css";

function FavouriteProductsPage() {
  const favourite = useSelector(favouritesSelector);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  let productName;

  const [filters, setFilters] = useState({
    productName: productName ? decodeURIComponent(productName) : undefined,
    sort: "ASC",
    page: 1,
  });

  const [pagination, setPagination] = useState({
    count: 12,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getProductsByName(filters);
        setProductList(data);
        setPagination(pagination);
        console.log(data);
        console.log("=====================");
        console.log(pagination);
      } catch (error) {
        console.log("Lỗi product list: ", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePagination = (e) => {
    const page = Number(e.target.getAttribute("data-page"));
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleSort = (newValueSort) => {
    setFilters((prev) => ({ ...prev, sort: newValueSort }));
  };

  return (
    <div className="favourite-root">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;{" "}
          <Link to="#">Danh sách sản phẩm</Link> &gt;{" "}
          <span>Kết quả tìm kiếm: {filters.productName}</span>
        </nav>

        <div className="content">
          <div className="right-panel">

            <div className="pagination">
              {Array.from({ length: pagination.count }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-btn ${pagination.page === i + 1 ? "active" : ""}`}
                  data-page={i + 1}
                  onClick={handlePagination}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteProductsPage;
