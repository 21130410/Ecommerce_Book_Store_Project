import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logo2.png';
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const goToHome = () => navigate("/");
    const goToCart = () => navigate("/cart");
    const goToLogin = () => navigate("/sign-in");

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = e.target.elements.search.value.trim();
        if (keyword) {
            navigate(`/search?query=${keyword}`);
        }
    };

    return (
        <header className="bookstore-header">
            <div className="logo" onClick={goToHome}>
                <img src={Logo} alt="Shop Sách Hay Logo" className="header-logo" />
                ShopSachHay
            </div>

            <SearchBar
                list={suggestions}
                onInputChange={handleInputChange}
                onEnter={handleEnter}
            />

            <div className="header-actions">
                <button onClick={goToCart}>🛒 Giỏ hàng</button>
                <button onClick={goToLogin}>🔐 Đăng nhập</button>
            </div>
        </header>
    );
}
