import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css"; // Viết CSS ở đây

ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
};

function ProductList({ data }) {
    return (
        <div className="product-list-container">
            {data.map((product) => (
                <div className="product-item" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
