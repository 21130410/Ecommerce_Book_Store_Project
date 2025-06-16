import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/logo2.png";
import SearchBar from "../SearchBar/SearchBar";
import productApi from "../../api/productApi";
import { logOut } from "../../store/UserSlice";
import { cartItemsCountSelector } from "../../store/Selectors";
import { removeCart } from "../../store/CartSlice";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector(cartItemsCountSelector);

  const [suggestions, setSuggestions] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { userInfo, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!keyword) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await productApi.getProductNameSuggest(keyword);
        setSuggestions(res);
      } catch (error) {
        console.error("Lỗi khi lấy gợi ý sản phẩm:", error);
      }
    };

    fetchSuggestions();
  }, [keyword]);

  const handleInputChange = (value) => setKeyword(value);

  const handleEnter = (value) => {
    if (value.trim()) {
      navigate(`/products/name/${value}`);
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
     dispatch(removeCart());
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  }

  const goToFavoteriProduct = () => {
    navigate("/favourite-products");
  }
  const [showMenu, setShowMenu] = useState(false);

  // Đóng dropdown khi click ra ngoài (tùy chọn nâng cao)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-dropdown")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bookstore-header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="Shop Sách Hay Logo" className="header-logo" />
        ShopSachHay
      </div>

      <SearchBar
        list={suggestions}
        onInputChange={handleInputChange}
        onEnter={handleEnter}
      />

      <div className="header-actions">
        <button className="header-button" onClick={goToFavoteriProduct}>❤️ Yêu thích</button>
        <button className="header-button" onClick={goToCart}>🛒 Giỏ hàng </button>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}

        {!isAuthenticated ? (
          <button className="header-button" onClick={() => navigate("/sign-in")}>🔐 Đăng nhập</button>
        ) : (
          <div className="user-dropdown">
            <button className="user-toggle" onClick={() => setShowMenu(!showMenu)}>
              👤 {userInfo?.userName || "User"} ▼
            </button>
            {showMenu && (
              <div className="user-menu">
                <button onClick={() => navigate("/profile")}>👤 Hồ sơ</button>
                <button onClick={() => navigate("/order-history")}>📋 Lịch sử đặt hàng</button>
                <button onClick={handleLogout}>🚪 Đăng xuất</button>
              </div>
            )}
          </div>
        )}
      </div>

    </header>
  );
}
