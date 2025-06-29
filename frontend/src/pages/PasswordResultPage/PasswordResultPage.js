import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import userApi from "../../api/userApi";
import { useEffect } from "react";

const defaultTheme = createTheme();

export default function PasswordResultPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, [location]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");

    // console.log("formData: ", formData);
    if (password !== rePassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    const data = {
      token: token,
      password: password,
      rePassword: rePassword,
    };
    try {
      const res = await userApi.resetPasswordConfirm(
        token,
        password,
        rePassword
      );
      console.log(res);
      if (res.status === "success") {
        alert("Cập nhật mật khẩu thành công!");
        navigate("/sign-in");
      } else {
        alert("Đổi mật khẩu thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đổi mật khẩu: ", error);
      alert("Đã xảy ra lỗi trong quá trình đổi mật khẩu");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            NHẬP MẬT KHẨU MỚI
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Nhập mật khẩu"
              type="password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="rePassword"
              label="Nhập lại mật khẩu"
              type="password"
              id="rePassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              XÁC NHẬN
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
