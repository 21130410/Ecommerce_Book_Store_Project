import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "TỔNG QUAN",
            icon: <AppstoreOutlined />,
            key: "/admin",
          },
          {
            label: "QUẢN LÝ SẢN PHẨM",
            key: "/admin/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "QUẢN LÝ ĐƠN HÀNG",
            key: "/admin/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "QUẢN LÝ NGƯỜI DÙNG",
            key: "/admin/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
