import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductsByNamePage.css"; // Import file CSS mới

export default function ProductsByNamePage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await productApi.searchProductsByName(name);
        setProducts(res);
      } catch (err) {
        console.error("Lỗi khi tìm kiếm sản phẩm:", err);
      }
    };
    fetchData();
  }, [name]);

  return (
    <div className="search-result-container">
      <h2 className="search-title">Kết quả tìm kiếm cho: <span>"{name}"</span></h2>
      {products.length === 0 ? (
        <p className="no-result">Không tìm thấy sản phẩm nào.</p>
      ) : (
        <ProductList data={products} />
      )}
    </div>
  );
}
