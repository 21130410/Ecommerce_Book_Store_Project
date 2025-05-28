import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import SearchBar from "../SearchBar/SearchBar";
import productApi from "../../api/productApi";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import { CategoryContext } from "../../constants/common";
// import { useContext } from "react";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const [suggestions, setSuggestions] = useState([]);
    const [keyword, setKeyword] = useState("");

    // const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    // const isMenuOpen = Boolean(menuAnchorEl);

    // const handleMenuOpen = (event) => {
    //     setMenuAnchorEl(event.currentTarget);
    // };

    // const handleMenuClose = () => {
    //     setMenuAnchorEl(null);
    // };


    // const categories = useContext(CategoryContext);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!keyword) return;
            try {
                const res = await productApi.getProductNameSuggest(keyword);
                setSuggestions(res);
            } catch (error) {
                console.error("Lỗi khi lấy gợi ý sản phẩm:", error);
            }
        };
        fetchSuggestions();
    }, [keyword]);

    const goToHome = () => navigate("/");
    const goToCart = () => navigate("/cart");
    const goToLogin = () => navigate("/sign-in");

    const handleInputChange = (value) => {
        setKeyword(value);
    };

    const handleEnter = (value) => {
        if (value.trim()) {
            navigate(`/products/name/${value}`);
        }
    };

    return (
        <header className="bookstore-header">
            {/* <button className="category-button" onClick={handleMenuOpen}>
                <MenuIcon />
            </button> */}
            <div className="logo" onClick={goToHome}>
                <img src={Logo} alt="Shop Sách Hay Logo" className="header-logo" />
                ShopSachHay
            </div>


            {/* <Menu
                anchorEl={menuAnchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                    elevation: 2,
                    sx: {
                        mt: 1.5,
                        minWidth: 180,
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.15))",
                    },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
                {categories.map((c) => (
                    <MenuItem onClick={handleMenuClose}>
                        <a className="block-pages" href={`/categories/${c.categoryName}`}>
                            {c.categoryName}
                        </a>
                    </MenuItem>
                ))}
            </Menu> */}

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
