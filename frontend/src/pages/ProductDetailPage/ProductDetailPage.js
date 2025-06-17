import React, { useEffect, useState } from "react";
import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useMatch } from "react-router-dom";
import Product from "../../components/Product/Product";
import AddToCart from "../../components/AddToCart/AddToCart";
import CommentSection from "../../components/Comment/Comment"; // Đổi tên import
import commentApi from "../../api/commentApi";
import productApi from "../../api/productApi";

const useStyles = makeStyles(() => ({
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

    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await productApi.get(productId);
                setProduct(res);
            } catch (error) {
                console.log('Lỗi lấy chi tiết sản phẩm:', error);
            }
        })();
    }, [productId]);

    useEffect(() => {
        (async () => {
            try {
                const res = await commentApi.getComments(productId);
                console.log("Lấy danh sách bình luận:", res);
                setComments(Array.isArray(res) ? res : []);
            } catch (error) {
                console.log("Lỗi lấy bình luận:", error);
            }
        })();
    }, [productId]);

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
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                style={{ maxWidth: "100%" }}
                            />
                        </Grid>
                        <Grid item className={classes.right}>
                            <Product product={product} />
                            <AddToCart product={product} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Hiển thị bình luận */}
            <CommentSection data={comments} />
        </Box>
    );
}

export default ProductDetailPage;
