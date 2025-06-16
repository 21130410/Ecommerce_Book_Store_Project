import React from "react";
import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import ProductThumbnail from "./components/ProductThumbnail";
// import useProductDetail from "../../../hooks/useProductDetail";
// import useComments from "../../../hooks/useComments";
import { Link, useMatch } from "react-router-dom";
import Product from "../../components/Product/Product";
// import ProductTabs from "./components/ProductTabs";
// import "./ProductDetail.css";
import AddToCart from "../../components/AddToCart/AddToCart";
import { useEffect, useState } from "react";
import productApi from "../../api/productApi";


const useStyles = makeStyles((theme) => ({
    root: { padding: "30px 0px", backgroundColor: "#f4f4f4" },
    left: {
        padding: "12px",
        borderRight: "1px solid grey",
    },
    right: { flex: "1 1 0", padding: "12px" },
    breadcrumb: { marginBottom: "20px" },
}));

function ProductDetailPage() {
    const classes = useStyles();
    const match = useMatch("/products/:productId");
    const {
        params: { productId },
    } = match;

    function useProductDetail(productId) {
        const [product, setProduct] = useState({});
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            (async () => {
                try {
                    setLoading(true);
                    const res = await productApi.get(productId);
                    setProduct(res);
                    setLoading(false);
                } catch (error) {
                    console.log('Loi lay chi tiet san pham', error);
                }
            })()
        }, [productId])

        return { product, loading };
    }

    const { product } = useProductDetail(productId);
    console.log("product:", product);

    return (
        <Box className={classes.root}>
            <Container>
                <Box className={classes.breadcrumb}>
                    <Breadcrumbs maxItems={3} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Trang chủ
                        </Link>
                        <Link underline="hover" color="inherit" to="#">
                            Chi tiết sản phẩm
                        </Link>
                        <Link underline="hover" color="inherit" to="#">
                            {product.productName}
                        </Link>
                    </Breadcrumbs>
                </Box>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <img src={product.imageUrl} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <Product product={product} />
                            <AddToCart product={product} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ProductDetailPage;
