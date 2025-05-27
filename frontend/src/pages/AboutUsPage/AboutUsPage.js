import "./AboutUsPage.css";

function AboutUsPage() {
    return (
        <div className="about-container">
            <div className="about-banner">
                <h1>Về Chúng Tôi</h1>
            </div>
            <div className="about-content">
                <section className="about-section">
                    <h2>Sứ Mệnh Của Shop Sách Hay</h2>
                    <p>
                        Shop Sách Hay cam kết mang đến cho bạn đọc những cuốn sách chất lượng, truyền cảm hứng và nuôi dưỡng tri thức.
                        Chúng tôi tin rằng sách là người bạn đồng hành tuyệt vời trên hành trình phát triển bản thân.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Chúng Tôi Là Ai?</h2>
                    <p>
                        Shop Sách Hay là một hiệu sách trực tuyến được thành lập bởi những người yêu sách,
                        với mong muốn kết nối tri thức với mọi người thông qua những đầu sách chọn lọc, cập nhật và đáng giá.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Giá Trị Cốt Lõi</h2>
                    <ul>
                        <li>✔ Lan tỏa tri thức, nuôi dưỡng tâm hồn</li>
                        <li>✔ Sách chất lượng – Dịch vụ tận tâm</li>
                        <li>✔ Tôn trọng tác giả, bạn đọc và cộng đồng</li>
                        <li>✔ Luôn đổi mới để phục vụ tốt hơn</li>
                    </ul>
                </section>
                <section className="about-section">
                    <h2>Liên Hệ</h2>
                    <p>Email: support@@ShopSachHay.com</p>
                    <p>Hotline: 093 126 9904</p>
                    <p>Địa chỉ: 85 Lê Văn Sỹ, P.13 Quận Phú Nhuận, TPHCM</p>
                </section>
            </div>
        </div>
    );
};

export default AboutUsPage;
