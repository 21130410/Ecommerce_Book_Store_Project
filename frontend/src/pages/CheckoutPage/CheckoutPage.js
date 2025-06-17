import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSelector, cartTotalSelector } from "../../store/Selectors";
import { formatPrice } from "../../utils/ultis";
import paymentApi from "../../api/peymentApi";
import orderApi from "../../api/orderApi";
import "./CheckoutPage.css";

function CheckoutPage() {
  const cart = useSelector(cartSelector);
  const orderTotal = useSelector(cartTotalSelector);
  const navigate = useNavigate();

  const handleSubmitPayment = async (formData) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user || !user.id) {
      alert("Vui lòng đăng nhập trước khi thanh toán!");
      return;
    }

    const orderData = {
      userId: user.id,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerMobile: formData.customerMobile,
      shippingAddress: formData.address,
      paymentTime: new Date().toISOString().replace(/[-:T.]/g, "").slice(0, 14),
      transactionId: Math.floor(Math.random() * 1000000),
      totalPrice: orderTotal,
      paymentStatus: formData.paymentMethod === "VNPAY" ? 1 : 0,
      orderStatus: 0,
      orderItems: cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }))
    };
    console.log(orderData)

    try {
      await orderApi.create(orderData);

      if (formData.paymentMethod === "VNPAY") {
        const orderItemsStr = cart
          .map((item) => `${item.product.id},${item.quantity}`)
          .join(";");
        const orderInfo = `${formData.customerName};${formData.customerEmail};${formData.customerMobile};${formData.address}`;
        const combinedOrderInfo = `${orderInfo} orderItems:${orderItemsStr}`;

        const res = await paymentApi.payment(orderTotal, combinedOrderInfo);
        window.location.href = res.paymentUrl;
      } else {
        navigate("/thanks");
      }
    } catch (err) {
      console.error("Lỗi lưu đơn hàng:", err);
      alert("Có lỗi xảy ra khi lưu đơn hàng. Vui lòng thử lại.");
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
            <table>
              <colgroup>
                <col style={{ width: "15%" }} />
                <col style={{ width: "50%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                </tr>
              </thead>
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
                    <td className="product-name">
                      <span className="product-description-name">
                        {cartItem.product.productName}
                      </span>
                    </td>
                    <td className="product-quantity">{cartItem.quantity}</td>
                    <td className="product-price">
                      <span>
                        {formatPrice(cartItem.quantity * cartItem.product.discountedPrice)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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