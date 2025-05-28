import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import { Box, Container } from "@mui/material";
import { CategoryContext } from "../../constants/common";

export default function HomePage() {
    const categories = useContext(CategoryContext);
    return (
        <Box
            sx={{
                bgcolor: "#f4f4f4",
                paddingTop: 5,
            }}
        >
            <Container>
                <div className="contents">
                    <div className="carouselMain">
                        <div className="div-carousel">
                            <Banner />
                            <div className="block__service">
                                <h4 className="service-title">Ưu đãi của bạn</h4>
                                <div className="block__service-list">
                                    <ul className="service-list">
                                        <li className="service">
                                            <p className="service-text1">Miễn phí giao hàng</p>
                                            <p className="service-text2">
                                                Freeship cho đơn hàng thanh toán trước
                                            </p>
                                        </li>
                                        <li className="service">
                                            <p className="service-text1">Đổi trả/ Bảo hành</p>
                                            <p className="service-text2">
                                                Đổi trả 7 ngày, bảo hành đến 2 năm
                                            </p>
                                        </li>
                                        <li className="service">
                                            <p className="service-text1">Chấp nhận COD</p>
                                            <p className="service-text2">
                                                Kiểm tra hàng trước khi thanh toán
                                            </p>
                                        </li>
                                        <li className="service">
                                            <p className="service-text1">
                                                Gửi feedback nhận quà ngay
                                            </p>
                                            <p className="service-text2">
                                                Với mỗi feedback được gửi, quý khách nhận ngay voucher
                                                giảm 5% cho đơn hàng tiếp theo
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
