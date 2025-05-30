import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductListByCategory from '../../components/ProductListByCategory/ProductListByCategory';
import productApi from "../../api/productApi";
import Sort from '../../components/Sort/Sort';

function CategoryPage() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

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
            page: 1,
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
                    <ProductListByCategory categoryId={categoryId} />
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

export default CategoryPage;
