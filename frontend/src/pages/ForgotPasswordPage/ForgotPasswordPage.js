import React, { useState } from "react";
import userApi from "../../api/userApi";
import "./ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email || !emailRegex.test(email)) {
      setErrors({ email: "Vui lòng nhập địa chỉ email hợp lệ" });
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await userApi.resetPassword(email);
      if (res.status === "success") {
        setSuccess(true);
      } else {
        alert("Reset mật khẩu thất bại: " + res.message);
      }
    } catch (error) {
      console.error("Lỗi resetPassword: ", error);
      alert("Đã xảy ra lỗi trong quá trình resetPassword");
    }
  };

  return (
    <div className="forgot-pw-wrapper">
      <div className="forgot-pw-header"></div>

      <div className="forgot-pw-container">
        <div className="forgot-pw-box">
          <div className="forgot-pw-icon">
            {success ? "✅" : "🔒"}
          </div>
          <h2 className="forgot-pw-title">
            {success ? "Thành công" : "QUÊN MẬT KHẨU"}
          </h2>

          {success ? (
            <p className="forgot-pw-success">
              Vui lòng kiểm tra email của bạn để đặt lại mật khẩu.{" "}
              <a href="/">Quay về trang chủ</a>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="forgot-pw-form">
              <div className="forgot-pw-form-group">
                <label htmlFor="email">Địa chỉ Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className={errors.email ? "forgot-pw-input-error" : ""}
                  placeholder="Nhập email của bạn"
                />
                {errors.email && (
                  <p className="forgot-pw-error-text">{errors.email}</p>
                )}
              </div>

              <button type="submit" className="forgot-pw-submit-btn">
                TIẾP TỤC
              </button>
              <p className="forgot-pw-link-back">
                <a href="/sign-in">Quay lại trang đăng nhập</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
