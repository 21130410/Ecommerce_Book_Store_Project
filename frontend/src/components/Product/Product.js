import React from "react";
import PropTypes from "prop-types";
import { formatPrice, promotionPercent } from '../../utils/ultis';
import "./Product.css";

function Product({ product = {} }) {
  const { productName, description, price, discountedPrice } = product;

  return (
    <div className="product-info">
      <p className="product-name">{productName}</p>

      <p className="product-description">{description}</p>

      <div className="price-box">
        <span className="sale-price">{formatPrice(discountedPrice)}</span>

        {discountedPrice > 0 && (
          <>
            <span className="original-price">{formatPrice(price)}</span>
            <span className="promotion-percent">
              -{promotionPercent(price, discountedPrice)}%
            </span>
          </>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
