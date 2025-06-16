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

    const handleClickAccount = (orderId) => {
        console.log(`View order with ID: ${orderId}`);
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
                            <TableCell>Mã đơn hàng</TableCell>
                            <TableCell>Ngày đặt</TableCell>
                            <TableCell>Phương thức thanh toán</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Tổng tiền</TableCell>
                            <TableCell>Xem chi tiết</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <TableRow key={order.id}>
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
