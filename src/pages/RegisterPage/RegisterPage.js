import React, { useState } from 'react';
// import axios from 'axios';
import "./RegisterPage.scss"

const RegisterPage = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const newUser = { username, password };
    //         await axios.post('http://localhost:3000/users', newUser); // Gửi POST request đến db.json
    //         alert('Đăng kí thành công!');
    //         // Sau khi đăng kí thành công, có thể chuyển hướng hoặc thực hiện các xử lý khác
    //     } catch (error) {
    //         console.error('Lỗi khi đăng kí:', error);
    //         alert('Đăng kí thất bại! Vui lòng thử lại.');
    //     }
    // };

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