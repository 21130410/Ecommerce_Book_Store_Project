import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils/ultis";
import "./OrderHistoryPage.css";

function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
        setOrders(orderHistory);
    }, []);

    return (
        <div className="order-history-container">
            <h2 className="order-history-title">🧾 Lịch sử đơn hàng</h2>
            {orders.length === 0 ? (
                <p style={{ textAlign: "center" }}>Chưa có đơn hàng nào.</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="order-card">
                        <div className="order-info">
                            <p><strong>Khách hàng:</strong> {order.customerName}</p>
                            <p><strong>Email:</strong> {order.customerEmail}</p>
                            <p><strong>Điện thoại:</strong> {order.customerMobile}</p>
                            <p><strong>Địa chỉ:</strong> {order.address}</p>
                            <p><strong>Phương thức thanh toán:</strong> {order.paymentMethod}</p>
                            <p><strong>Tổng tiền:</strong> {order.total ? order.total.toLocaleString("vi-VN") + " ₫" : "0 ₫"}</p>
                            <p><strong>Ngày đặt:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}</p>
                            <p><strong>Trạng thái:</strong> <span className="order-status">{order.status || "Đã thanh toán"}</span></p>
                        </div>
                        <div>
                            <strong>Sản phẩm:</strong>
                            <ul className="order-items">
                                {order.items?.map((item) => {
                                    console.log("Item:", item);
                                    return (
                                        <li key={item.id}>
                                            {item.productName} x {item.quantity} – {item.price} VND
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>
                    </div>
                ))
            )}
        </div>

    );
}

export default OrderHistoryPage;
