import "./Footer.css";
import { Box, Container } from "@mui/material";
import Logo from '../../assets/images/logo.png'

function Footer(props) {
    return (
        <footer>
            <Box>
                <Container>
                    <div className="footer__block">
                        <div className="footer__block-maininfo1">
                            <img src={Logo} alt="Logo Shop Sách Hay" className="footer-logo" />
                            <h3 className="footer__title-info">
                                <a href="/about-shop">Về Shop Sách Hay</a>
                            </h3>
                            <div className="block-maininfo">
                                <div className="block-introduce">
                                    <p className="text-introduce texts">
                                        Shop chuyên cung cấp sách hay tại TP.HCM
                                    </p>
                                </div>
                                <div className="block-contacts">
                                    <p className="text-address texts">
                                        <b>Địa chỉ: </b>
                                        <span>
                                            Số 6, phường Linh Trung, Tp.Thủ Đức, Tp. Hồ Chí Minh
                                        </span>
                                    </p>
                                    <p className="text-phone texts">
                                        <b>Điện thoại: </b>
                                        <span>093 126 9904</span>
                                    </p>
                                    <p className="text-email texts">
                                        <b>Email: </b>
                                        <span>ShopSachHay@ShopSachHay.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__block-maininfo2">
                            <h3 className="footer__title-info">Hỗ trợ khách hàng</h3>
                            <div className="block-maininfo">
                                <ul className="list-helps">
                                    <li className="text-helps">
                                        <a>Giới thiệu</a>
                                    </li>
                                    <li className="text-helps">
                                        <a>Chính sách đổi trả</a>
                                    </li>
                                    <li className="text-helps">
                                        <a>Chính sách bảo mật</a>
                                    </li>
                                    <li className="text-helps">
                                        <a>Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__block-maininfo3">
                            <h3 className="footer__title-info">Chăm sóc khách hàng</h3>
                            <div className="block-maininfo">
                                <div className="contact-info">
                                    <div className="contacts">
                                        <p className="text-contact phone-contact">093 126 9904</p>
                                        <p className="text-contact email-contact">
                                            ShopSachHay@ShopSachHay.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="footer__title-info footer__title-follows">
                                Follow Us
                            </h3>
                            <div className="block-maininfo">
                                <div className="list-follow">
                                    <a className="block-follows" href="https://www.facebook.com/">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a className="block-follows">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a className="block-follows">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a className="block-follows" href="https://www.youtube.com/">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p className="text-copyright">
                            Copyright © 2024 <a href="/">ShopSachHay</a>
                        </p>
                    </div>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
