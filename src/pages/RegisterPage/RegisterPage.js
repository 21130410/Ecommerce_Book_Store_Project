import React, { useState } from 'react';
// import axios from 'axios';
import "./RegisterPage.css"

const RegisterPage = () => {


    return (
        <div className="register-page">
            <h2>Đăng kí</h2>
            <form onSubmit="">
                <div className="form-group">
                    <label>Tên đăng nhập:</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Mật khẩu:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Đăng kí</button>
            </form>
        </div>
    );
};

export default RegisterPage;