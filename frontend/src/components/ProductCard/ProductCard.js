import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../constants";
import { formatPrice } from "../../utils/ultis";
import { favouritesSelector } from "../../store/Selectors";
import { setFavourite } from "../../store/FavouriteSlice";

import "./ProductCard.css";

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

function ProductCard({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favourites = useSelector(favouritesSelector);

    const [isLiked, setIsLiked] = useState(
        favourites.some((item) => item.id === product.id)
    );

    const thumbnail = product.imageUrl || THUMBNAIL_PLACEHOLDER;

    const navigateToDetail = () => {
        navigate(`/products/${product.id}`);
    };

    const toggleFavourite = (e) => {
        e.stopPropagation();
        dispatch(setFavourite(product));
        setIsLiked((prev) => !prev);
    };

    return (
        <Card className="product-card" onClick={navigateToDetail}>
            <div className="product-image-wrapper">
                <Card.Img variant="top" src={thumbnail} className="product-image" />
            </div>
            <Card.Body className="product-card-body">
                <p className="product-brand">{product.brand}</p>
                <p className="product-name">{product.productName}</p>
                <div className="product-pricing">
                    <span className="discounted">{formatPrice(product.discountedPrice)}</span>
                    <span className="original">{formatPrice(product.price)}</span>
                </div>
                <IconButton className="favourite-btn" onClick={toggleFavourite}>
                    <FavoriteBorderIcon style={{ color: isLiked ? "red" : "#555" }} />
                </IconButton>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
