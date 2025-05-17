import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginPage.scss"

const LoginPage = () => {
    return (
        <div className="login-page">
            <h2>Đăng nhập</h2>
            <form onSubmit=''>
                <div className="form-group ">
                    <label>Tên đăng nhập:</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <label>Mật khẩu:</label>
                    <input type="password"/>
                </div>
                <button type="submit" className=''>Đăng nhập</button>
                <Link to="/register" className='register text-danger'>Đăng kí</Link>
            </form>
        </div>
    );
};

export default LoginPage;
