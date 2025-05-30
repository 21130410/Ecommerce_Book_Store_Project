import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSelector, cartTotalSelector } from "../../store/Selectors";
import { formatPrice } from "../../utils/ultis";
import paymentApi from "../../api/peymentApi";
import "./CheckoutPage.css";

function CheckoutPage() {
  const cart = useSelector(cartSelector);
  const orderTotal = useSelector(cartTotalSelector);
  const navigate = useNavigate();

  const handleSubmitPayment = async (formData) => {
    if (formData.paymentMethod === "VNPAY") {
      try {
        const orderItems = cart
          .map((product) => `${product.id},${product.quantity}`)
          .join(";");
        const orderInfo = `${formData.customerName};${formData.customerEmail};${formData.customerMobile};${formData.address}`;
        const combinedOrderInfo = `${orderInfo} orderItems:${orderItems}`;

        const res = await paymentApi.payment(orderTotal, combinedOrderInfo);

        // Lưu đơn hàng vào localStorage
        const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
        const newOrder = {
          id: Date.now(),
          customerName: formData.customerName,
          customerEmail: formData.customerEmail,
          customerMobile: formData.customerMobile,
          address: formData.address,
          paymentMethod: formData.paymentMethod,
          items: cart.map((item) => ({
            id: item.id,
            productName: item.productName,
            quantity: item.quantity,
            price: item.discountedPrice,
          })),
          total: orderTotal,
          createdAt: new Date().toISOString(),
          paymentUrl: res.paymentUrl,
        };
        orderHistory.push(newOrder);
        localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

        // chuyển hướng sang trang thanh toán
        window.location.href = res.paymentUrl;
      } catch (error) {
        console.error("Lỗi khi thanh toán:", error);
      }
    } else if (formData.paymentMethod === "COD") {
      const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
      const newOrder = {
        id: Date.now(),
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerMobile: formData.customerMobile,
        address: formData.address,
        paymentMethod: formData.paymentMethod,
        items: cart.map((item) => ({
          id: item.id,
          productName: item.productName,
          quantity: item.quantity,
          price: item.discountedPrice,
        })),
        total: orderTotal,
        createdAt: new Date().toISOString(),
        paymentUrl: null,
        status: "Chờ giao hàng",
      };
      orderHistory.push(newOrder);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

      navigate("/thanks");
    }
  };




  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Thông tin người nhận
            </Typography>
            <CheckoutForm handleSubmitPayment={handleSubmitPayment} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Đơn hàng của bạn
            </Typography>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.product.id}>
                  <td className="product-image">
                    <img
                      className="product-thumbnail-image"
                      alt={cartItem.product.productName}
                      src={cartItem.product.imageUrl}
                    />
                  </td>
                  <td>
                    <span className="product-description-name">
                      {cartItem.product.productName}
                    </span>
                  </td>
                  <td className="product-quantity">{cartItem.quantity}</td>
                  <td className="product-price">
                    <span>
                      {formatPrice(cartItem.quantity * cartItem.product.price)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              <p className="result">Tổng cộng: {formatPrice(orderTotal)}</p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CheckoutPage;