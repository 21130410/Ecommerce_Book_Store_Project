import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userApi from "../../api/userApi";
import { logIn } from "../../store/UserSlice";

import "./SignInPage.css";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.trim();
    const password = formData.get("password");

    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu");
      setLoading(false);
      return;
    }

    try {
      const res = await userApi.signIn({ email, password });

      if (res.message === "Signin Success") {
        const userInfor = {
          id: res.id,
          email: res.email,
          userName: res.userName,
          fullName: res.fullName,
          mobile: res.mobile,
          jwt: res.jwt,
        };

        localStorage.setItem("token", res.jwt);
        localStorage.setItem("userInfo", JSON.stringify(userInfor));

        dispatch(logIn(userInfor));
        navigate("/");
      } else {
        setError("Đăng nhập thất bại: " + res.message);
      }
    } catch (err) {
      setError("Đã xảy ra lỗi trong quá trình đăng nhập");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div id="block-signin">
      <div id="container-signin">
        <main className="signin-main">
          <form className="signin-form" onSubmit={handleSubmit} noValidate>
            <div className="signin-avatar">
              <div className="lock-icon">🔒</div>
            </div>
            <h1 className="signin-title">ĐĂNG NHẬP</h1>

            <input
              type="email"
              name="email"
              placeholder="Địa chỉ Email"
              required
              autoFocus
              disabled={loading}
              className="signin-input"
              autoComplete="email"
            />

            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              required
              disabled={loading}
              className="signin-input"
              autoComplete="current-password"
            />

            <label className="signin-checkbox-label">
              <input type="checkbox" value="remember" disabled={loading} />
              Nhớ tài khoản
            </label>

            {error && <p className="signin-error">{error}</p>}

            <div className="signin-socials">
              <button
                type="button"
                className="signin-social-btn"
                disabled={loading}
                aria-label="Sign in with Google"
              >
                <i className="fab fa-google social-icon" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="signin-social-btn"
                disabled={loading}
                aria-label="Sign in with Facebook"
              >
                <i className="fab fa-facebook-f social-icon" aria-hidden="true"></i>
              </button>
            </div>

            <button
              type="submit"
              className="signin-submit"
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "ĐĂNG NHẬP"}
            </button>

            <div className="signin-links">
              <a href="/forgot-password" className="signin-link">
                Quên mật khẩu?
              </a>
              <p>
                Chưa có tài khoản?&nbsp;
                <a href="/sign-up" className="signin-link">
                  Đăng ký ngay!
                </a>
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
