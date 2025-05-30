import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userApi from "../../api/userApi";
import "./ProfilePage.css";

export default function ProfilePage() {
    const { userInfo } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phone: "",
        avatar: null,
    });
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (userInfo) {
            setFormData({
                userName: userInfo.userName || "",
                email: userInfo.email || "",
                phone: userInfo.phone || "",
                avatar: userInfo.avatar || null,
            });
            setPreviewImage(userInfo.avatarUrl || "");
        }
    }, [userInfo]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "avatar" && files.length > 0) {
            setFormData((prev) => ({ ...prev, avatar: files[0] }));
            setPreviewImage(URL.createObjectURL(files[0]));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("userName", formData.userName);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        if (formData.avatar) {
            form.append("avatar", formData.avatar);
        }

        try {
            const res = await userApi.updateProfile(form);
            alert("Cập nhật thành công!");
            // Cập nhật lại Redux nếu cần
        } catch (err) {
            console.error("Lỗi cập nhật:", err);
            alert("Cập nhật thất bại.");
        }
    };

    return (
        <div className="profile-page">
            <h2>Thông tin cá nhân</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="avatar-preview">
                    <img src={previewImage || "/default-avatar.png"} alt="Avatar" />
                    <label>Chọn ảnh đại diện:</label>
                    <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="userName">Tên người dùng:</label>
                    <input
                        id="userName"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Tên người dùng"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                    />
                </div>

                <button type="submit">Cập nhật</button>
            </form>

        </div>
    );
}
