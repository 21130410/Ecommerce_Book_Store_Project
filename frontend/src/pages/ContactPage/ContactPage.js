import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-page">
            <h2>Liên hệ chúng tôi</h2>

            <div className="contact-info">
                <div className="contact-info-item">
                    <h3><i class="fa-solid fa-location-dot"></i>Địa chỉ</h3>
                    <p>85 Lê Văn Sỹ, P.13 Quận Phú Nhuận, TPHCM</p>
                </div>
                <div className="contact-info-item">
                    <h3><i class="fa-solid fa-envelope"></i>Email</h3>
                    <p>haianh123@gmail.com</p>
                </div>
                <div className="contact-info-item">
                    <h3><i class="fa-solid fa-phone"></i>Số điện thoại</h3>
                    <p>+84 933 901 917</p>
                </div>
            </div>

            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Tên của bạn:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tin nhắn:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit">Gửi</button>
            </form>
        </div>

    );
};

export default ContactPage;