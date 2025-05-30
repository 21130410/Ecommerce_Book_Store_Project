import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import ProductList from "../../components/ProductList/ProductList";
import Sort from "../../components/Sort/Sort";
import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    sort: "PRICE_ASC",
    page: 1,
  });
  const [pagination, setPagination] = useState({
    totalPages: 1,
    currentPage: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getProductsByCategory(filters);
        setProducts(data);
        setPagination({
          totalPages: pagination.totalPages,
          currentPage: pagination.currentPage,
        });
      } catch (error) {
        console.error("Error loading products:", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handleSortChange = (newSort) => {
    setFilters((prev) => ({
      ...prev,
      sort: newSort,
      page: 1, // reset về trang 1 khi đổi sort
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  return (
    <div className="products-page">
      <div className="layout">
        <div className="main-content">
          <Sort currentSort={filters.sort} onChange={handleSortChange} />
          {loading ? (
            <p>Đang tải sản phẩm...</p>
          ) : (
            <ProductList data={products} />
          )}
          <div className="pagination">
            {Array.from({ length: pagination.totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={pagination.currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
