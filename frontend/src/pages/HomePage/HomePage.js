import React, { useEffect, useState, useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";
import productApi from "../../api/productApi";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function HomePage() {
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // Lấy sản phẩm bán chạy (ví dụ sort = BEST_SELLING)
                const { data: bestSelling } = await productApi.getProductsByCategory({
                    page: 1,
                    sort: "BEST_SELLING",
                    limit: 4,
                });
                setBestSellingProducts(bestSelling);

                // Lấy nhiều sản phẩm để random (ví dụ 20 sản phẩm)
                const { data: allProducts } = await productApi.getProductsByCategory({
                    page: 1,
                    sort: "DESC",
                    limit: 20,
                });

                // Hàm lấy ngẫu nhiên 4 sản phẩm từ 20 sản phẩm
                const getRandomItems = (arr, n) => {
                    const shuffled = [...arr].sort(() => 0.5 - Math.random());
                    return shuffled.slice(0, n);
                };

                setSuggestedProducts(getRandomItems(allProducts, 4));
            } catch (err) {
                console.error("Failed to load products:", err);
            }
        })();
    }, []);

    return (
        <Box sx={{ bgcolor: "#f4f4f4", pt: 5 }}>
            <Container>
                <div className="contents">
                    {/* Banner + Ưu đãi */}
                    <div className="carouselMain">
                        <div className="div-carousel">
                            <Banner />
                            <Box className="service-section" sx={{ my: 5 }}>
                                <Typography variant="h5" className="section-title" gutterBottom>
                                    Ưu đãi của bạn
                                </Typography>
                                <Grid container spacing={4}>
                                    {[
                                        {
                                            icon: "fa-truck",
                                            title: "Miễn phí giao hàng",
                                            desc: "Freeship cho đơn hàng thanh toán trước",
                                        },
                                        {
                                            icon: "fa-sync-alt",
                                            title: "Đổi trả/Bảo hành",
                                            desc: "Đổi trả 7 ngày, bảo hành đến 2 năm",
                                        },
                                        {
                                            icon: "fa-money-bill-wave",
                                            title: "Chấp nhận COD",
                                            desc: "Kiểm tra hàng trước khi thanh toán",
                                        },
                                        {
                                            icon: "fa-gift",
                                            title: "Gửi feedback nhận quà",
                                            desc: "Feedback nhận ngay voucher giảm 5%",
                                        },
                                    ].map((item, index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Box className="service-card">
                                                <i className={`fas ${item.icon} service-icon`}></i>
                                                <Typography className="service-title">{item.title}</Typography>
                                                <Typography className="service-desc">{item.desc}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </div>
                    </div>

                    {/* Sản phẩm gợi ý */}
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                            Sản phẩm gợi ý
                        </Typography>
                        <ProductList data={suggestedProducts} />
                    </Box>

                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                            Sản phẩm bán chạy
                        </Typography>
                        <ProductList data={bestSellingProducts} />
                    </Box>
                </div>
            </Container>
        </Box>
    );
}
