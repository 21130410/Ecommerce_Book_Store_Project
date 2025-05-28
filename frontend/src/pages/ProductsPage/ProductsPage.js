import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
// import LoadingProducts from "./components/Loading";
import ProductList from "../../components/ProductList/ProductList";
import './ProductsPage.css';
// import ProductSort from "./components/ProductSort";
// import ProductFilters from "./components/ProductFilters";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    sort: "ASC",
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
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <div className="products-page">

      <div className="layout">
        {/* <div className="sidebar">
          <ProductFilters filters={filters} onChange={handleFiltersChange} />
        </div> */}

        <div className="main-content">
          {/* <ProductSort currentSort={filters.sort} onChange={handleSortChange} />
          {loading ? <LoadingProducts /> :  */}
          <ProductList data={products} />

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
