import React, { useState, useEffect } from "react";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, Box, IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector } from "react-redux";
import { userInfor } from "../../store/Selectors";
import { formatPrice } from "../../utils/ultis";
import orderApi from "../../api/orderApi";
import "./OrderHistoryPage.css";

function useOrder(userId) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!userId) return;

        (async () => {
            try {
                const res = await orderApi.get(userId);
                setOrders(res);
            } catch (error) {
                console.log("Lỗi lấy danh sách đơn hàng:", error);
            }
        })();
    }, [userId]);

    return orders;
}

const OrderHistory = () => {
    const user = useSelector(userInfor);
    const orders = useOrder(user?.id);
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const handleClickAccount = (orderId) => {
        setExpandedOrderId(prev => prev === orderId ? null : orderId);
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Lịch sử đặt hàng
            </Typography>
            <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', p: 1 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell className="label">Mã đơn hàng</TableCell>
                            <TableCell className="label">Ngày đặt</TableCell>
                            <TableCell className="label">Thanh toán</TableCell>
                            <TableCell className="label">Trạng thái</TableCell>
                            <TableCell className="label">Tổng tiền</TableCell>
                            <TableCell className="label">Xem chi tiết</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <React.Fragment key={order.id}>
                                    <TableRow>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.paymentStatus}</TableCell>
                                        <TableCell>{order.fulfillmentStatus}</TableCell>
                                        <TableCell>{formatPrice(order.total)}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleClickAccount(order.id)}>
                                                <RemoveRedEyeIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>

                                    {expandedOrderId === order.id && (
                                        <TableRow>
                                            <TableCell colSpan={6}>
                                                <Box sx={{ pl: 2 }}>
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        Chi tiết sản phẩm:
                                                    </Typography>
                                                    <Table size="small">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Sản phẩm</TableCell>
                                                                <TableCell>Số lượng</TableCell>
                                                                <TableCell>Đơn giá</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {order.orderItems?.map((item, index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell>{item.productName}</TableCell>
                                                                    <TableCell>{item.quantity}</TableCell>
                                                                    <TableCell>{formatPrice(item.productPrice)}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>


                </Table>
            </TableContainer>
        </Box>
    );
};

export default OrderHistory;
