// src/pages/admin/Orders.js
import { Space, Table, Typography, Button, message } from "antd";
import { useEffect, useState } from "react";
import orderApi from "../../../api/orderAdminApi";

function Orders() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const res = await orderApi.getAllOrders();
            setDataSource(res); // hoặc res.data tùy theo cấu trúc backend trả về
        } catch (err) {
            message.error("Không thể tải danh sách đơn hàng");
        } finally {
            setLoading(false);
        }
    };

    const handleConfirm = async (record) => {
        try {
            await orderApi.confirmOrder(record.id);
            message.success("Đã xác nhận đơn hàng");
            fetchOrders(); // reload
        } catch (err) {
            message.error("Xác nhận đơn hàng thất bại");
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <Space direction="vertical" size={40} style={{ width: "100%" }}>
                <Typography.Title level={3}>Quản lý đơn hàng</Typography.Title>
                <Table
                    className="fixed-font-table"
                    size="large"
                    loading={loading}
                    dataSource={dataSource}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    columns={[
                        {
                            title: "Mã đơn",
                            dataIndex: "id",
                        },
                        {
                            title: "Tên khách",
                            dataIndex: "customerName",
                            render: (val) => val || "-",
                        },
                        {
                            title: "Email",
                            dataIndex: "customerEmail",
                            render: (val) => val || "-",
                        },
                        {
                            title: "Số điện thoại",
                            dataIndex: "customerMobile",
                            render: (val) => val || "-",
                        },
                        {
                            title: "Tổng tiền",
                            dataIndex: "totalPrice",
                            render: (val) => val != null ? `${val.toLocaleString()} đ` : "0 đ",
                        },
                        {
                            title: "Trạng thái",
                            dataIndex: "orderStatus",
                            render: (val) =>
                                val === 1 ? "Đã xác nhận" : "Chờ xác nhận",
                        },
                        {
                            title: "Hành động",
                            render: (record) =>
                                record.orderStatus !== 1 && (
                                    <Button
                                        onClick={() => handleConfirm(record)}
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            fontWeight: "bold",
                                            border: "none",
                                        }}
                                    >
                                        Xác nhận
                                    </Button>
                                ),
                        },
                    ]}

                />
            </Space>
        </div>
    );
}

export default Orders;
