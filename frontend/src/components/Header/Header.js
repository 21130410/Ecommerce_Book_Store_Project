import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/logo2.png";
import SearchBar from "../SearchBar/SearchBar";
import productApi from "../../api/productApi";
import { logOut } from "../../store/UserSlice";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate("/");
  };

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
        {!isAuthenticated ? (
          <button onClick={() => navigate("/sign-in")}>🔐 Đăng nhập</button>
        ) : (
          <div className="user-info">
            <span>Xin chào, {userInfo?.userName || "User"}</span>
            <button onClick={() => navigate("/profile")}>Hồ sơ</button>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        )}
      </div>
    </header>
  );
}
