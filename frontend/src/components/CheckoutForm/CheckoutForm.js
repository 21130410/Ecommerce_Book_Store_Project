import React, { useState } from "react";
import { Button, TextField, MenuItem, Box } from "@mui/material";
import './CheckoutForm.css';

function CheckoutForm({ handleSubmitPayment }) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerMobile: "",
    address: "",
    paymentMethod: "VNPAY",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitPayment(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Họ tên"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="customerEmail"
        value={formData.customerEmail}
        onChange={handleChange}
        type="email"
        required
      />
      <TextField
        label="Số điện thoại"
        name="customerMobile"
        value={formData.customerMobile}
        onChange={handleChange}
        required
      />
      <TextField
        label="Địa chỉ giao hàng"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <TextField
        select
        label="Phương thức thanh toán"
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        <MenuItem value="VNPAY">VNPAY</MenuItem>
        <MenuItem value="COD">Thanh toán khi nhận hàng</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" type="submit">
        Thanh toán
      </Button>
    </Box>
  );
}

export default CheckoutForm;