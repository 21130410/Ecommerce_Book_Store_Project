import React from "react";
import { useSelector } from "react-redux";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Link,
    Paper,
    Typography,
} from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import { cartSelector, cartTotalSelector } from "../../store/Selectors";
import { formatPrice } from "../../utils/ultis";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function Cart() {
    const cart = useSelector(cartSelector);
    const cartTotal = useSelector(cartTotalSelector);
    const navigate = useNavigate();

    const handleAddToCartSubmit = () => {
        navigate('/cart/checkout');
    }

    return (
        <Box className="cart-root">
            <Container>
                {/* <Box className="cart-breadcrumb">
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="#">
                            Trang chủ
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                            Giỏ hàng
                        </Link>
                    </Breadcrumbs>
                </Box> */}

                {cart.length === 0 ? (
                    <Box
                        sx={{
                            height: "400px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" color="textSecondary">
                            Giỏ hàng của bạn đang trống.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ marginTop: 2 }}
                            onClick={() => navigate('/')}
                        >
                            Quay lại trang chủ
                        </Button>
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        <Grid item className="cart-left">
                            <Paper elevation={0} sx={{ padding: 1 }}>
                                <Typography
                                    className="cart-title"
                                    sx={{ fontWeight: 500, fontSize: "23px" }}
                                >
                                    GIỎ HÀNG CỦA BẠN
                                </Typography>
                                {cart.map((cartItem) => (
                                    <CartItem
                                        key={cartItem.product.id}
                                        product={cartItem.product}
                                        quan={cartItem.quantity}
                                    />
                                ))}
                            </Paper>
                        </Grid>
                        <Grid item className="cart-right">
                            <Paper elevation={0}>
                                <Box sx={{ m: 0, p: 2 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            height: "50px",
                                        }}
                                    >
                                        <Typography>Tạm tính</Typography>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {formatPrice(cartTotal)}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            height: "50px",
                                        }}
                                    >
                                        <Typography>Thành tiền</Typography>
                                        <Typography
                                            sx={{ fontWeight: 500 }}
                                            variant="h5"
                                            color="#FF0000"
                                        >
                                            {formatPrice(cartTotal)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ width: "100%", marginTop: "20px" }}
                                size="large"
                                onClick={handleAddToCartSubmit}
                            >
                                ĐẶT HÀNG
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
}

export default Cart;
