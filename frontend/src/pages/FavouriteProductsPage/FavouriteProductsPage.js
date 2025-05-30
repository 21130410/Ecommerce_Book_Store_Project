import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { favouritesSelector } from "../../store/Selectors";
import ProductList from "../../components/ProductList/ProductList";

import "./FavouriteProductsPage.css";

function FavouriteProductsPage() {
  const favourite = useSelector(favouritesSelector) || [];

  return (
    <div className="favourite-root">
      <div className="container">
        <div className="content">
          <div className="right-panel">
            {favourite.length === 0 ? (
              <p className="no-favourite-msg">Bạn chưa có sản phẩm yêu thích nào.</p>
            ) : (
              <ProductList data={favourite} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteProductsPage;
