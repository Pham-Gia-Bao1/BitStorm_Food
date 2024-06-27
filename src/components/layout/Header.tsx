"use client";
import React, { useState, useEffect } from "react";
import MainLogo from "../logo/MainLogo";
import { Avatar } from "@mui/material";
import { Button, Menu, Dropdown, Badge } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import OrderSide from "../order/OrderSide";
import { useCart } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ModeToggle: React.FC<{ count: number }> = ({ count }) => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(theme || "dark");

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const handleMenuClick = ({ key }: { key: string }) => {
    setTheme(key);
    setCurrentTheme(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick} selectedKeys={[currentTheme]}>
      <Menu.Item key="light">Light</Menu.Item>
      <Menu.Item key="dark">Dark</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className="mr-5" overlay={menu} trigger={["click"]}>
      <Button icon={<SettingOutlined />} size="large"></Button>
    </Dropdown>
  );
};

const Header: React.FC = () => {
  const { cart } = useCart();
  const uniqueCart = cart.reduce<CartItem[]>((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  // Update count whenever cart changes
  const [count, setCount] = useState<number>(uniqueCart.length);

  useEffect(() => {
    // Recalculate unique items count when cart changes
    setCount(uniqueCart.length);
  }, [cart, uniqueCart]);

  const { theme } = useTheme();

  return (
    <header
      className={`box-shadow sm:w-50 z-50 text-white p-4 fixed top-0 left-0 right-0 h-19 flex justify-between items-center bg-black ${theme}`}
    >
      <MainLogo />
      <div className="flex items-center gap-5">
        <Badge count={count}>
          <OrderSide />
        </Badge>
        <ModeToggle count={count} />
        <Avatar
          className="mr-4"
          alt="User Avatar"
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          sx={{ width: 24, height: 24 }}
        />
      </div>
    </header>
  );
};

export default Header;
