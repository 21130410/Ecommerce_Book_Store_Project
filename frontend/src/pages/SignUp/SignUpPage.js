import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import "./SignUpPage.css";

export default function SignUpPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName")?.trim();
    const email = formData.get("email")?.trim();
    const mobile = formData.get("mobile")?.trim();
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");

    if (!fullName || !email || !mobile || !password || !rePassword) {
      setError("Vui lòng nhập đầy đủ thông tin");
      setLoading(false);
      return;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      setError("Email không hợp lệ");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
      setLoading(false);
      return;
    }

    if (password !== rePassword) {
      setError("Mật khẩu nhập lại không khớp");
      setLoading(false);
      return;
    }

    if (!checked) {
      setError("Bạn cần đồng ý với điều khoản dịch vụ");
      setLoading(false);
      return;
    }

    try {
      const res = await userApi.signUp({ fullName, email, mobile, password });
      if (res.message === "Signup Success") {
        navigate("/sign-in");
      } else {
        setError("Đăng ký thất bại: " + res.message);
      }
    } catch (err) {
      setError("Đã xảy ra lỗi trong quá trình đăng ký");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div id="block-signup">
      <div id="header-signup">
      </div>
      <div id="container-signup">
        <main className="signup-main">
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="signup-avatar">
              <div className="lock-icon">🔒</div>
            </div>
            <h1 className="signup-title">ĐĂNG KÝ TÀI KHOẢN</h1>

            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              required
              autoFocus
              className="signup-input"
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Địa chỉ Email"
              required
              className="signup-input"
              disabled={loading}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Số điện thoại"
              required
              className="signup-input"
              disabled={loading}
            />
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              required
              className="signup-input"
              disabled={loading}
            />
            <input
              type="password"
              name="rePassword"
              placeholder="Nhập lại mật khẩu"
              required
              className="signup-input"
              disabled={loading}
            />

            <label className="signup-checkbox-label">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                disabled={loading}
              />
              Tôi đồng ý với điều khoản dịch vụ
            </label>

            {error && <p className="signup-error">{error}</p>}

            <button
              type="submit"
              className="signup-submit"
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "ĐĂNG KÝ"}
            </button>

            <div className="signup-links">
              <p>
                Đã có tài khoản?{" "}
                <a href="/sign-in" className="signup-link">
                  Đăng nhập!
                </a>
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
