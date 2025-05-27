import "./Footer.css";
import { Box, Container } from "@mui/material";
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="custom-footer">
            <Box>
                <Container>
                    <div className="footer-content">
                        <div className="footer-section about">
                            <img src={Logo} alt="Shop Sách Hay Logo" className="footer-logo" />
                            <h4 className="footer-heading">
                                <Link to="/about-shop">Giới thiệu về Shop</Link>
                            </h4>
                            <p className="footer-description">
                                Chuyên cung cấp sách chất lượng tại khu vực TP.HCM.
                            </p>
                            <div className="footer-contact-info">
                                <p><strong>Địa chỉ:</strong> 85 Lê Văn Sỹ, P.13 Quận Phú Nhuận, TPHCM</p>
                                <p><strong>Điện thoại:</strong> 093 126 9904</p>
                                <p><strong>Email:</strong> ShopSachHay@ShopSachHay.com</p>
                            </div>
                        </div>

                        <div className="footer-section links">
                            <h4 className="footer-heading">Hướng dẫn & Chính sách</h4>
                            <ul className="footer-link-list">
                                <li><Link to="/about-us">Về chúng tôi</Link></li>
                                <li><Link to="/policy">Chính sách bảo mật</Link></li>
                                <li><Link to="/contact">Liên hệ hỗ trợ</Link></li>
                            </ul>
                        </div>

                        <div className="footer-section support">
                            <h4 className="footer-heading">Chăm sóc khách hàng</h4>
                            <p>Hotline: 093 126 9904</p>
                            <p>Email: ShopSachHay@ShopSachHay.com</p>

                            <h4 className="footer-heading">Kết nối với chúng tôi</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2024 <Link to="/">ShopSachHay</Link>. All rights reserved.</p>
                    </div>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
