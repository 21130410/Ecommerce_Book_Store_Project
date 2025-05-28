import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { CategoryContext } from "../../constants/common";
import { useContext } from "react";
import './MainMenu.css';

const MainMenu = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const isMenuOpen = Boolean(menuAnchorEl);

    const handleMenuOpen = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };


    const categories = useContext(CategoryContext);
    return (
        <nav className="menu">
            <button className="category-button" onClick={handleMenuOpen}>
                <MenuIcon />
            </button>
            <Menu
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
            </Menu>
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/">Trang Chủ</Link>
                </li>
                <li className="menu-item">
                    <Link to="/ProductsPage">Sản Phẩm</Link>
                </li>
                <li className="menu-item">
                    <Link to="/about-us">Giới thiệu </Link>
                </li>
                <li className="menu-item">
                    <Link to="/contact">Liên hệ </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
