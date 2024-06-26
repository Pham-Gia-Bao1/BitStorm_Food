"use client";
import React from "react";
import MainLogo from "../logo/MainLogo";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { Button, Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";

const ModeToggle: React.FC = () => {
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
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button icon={<SettingOutlined />} size="large">
        Theme: {currentTheme}
      </Button>
    </Dropdown>
  );
};

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <header
      className={`box-shadow sm:w-50 z-50 text-white p-4 fixed top-0 left-0 right-0 h-19 flex justify-between items-center bg-black ${theme}`}
    >
      <MainLogo />
      <div className="flex items-center">
        <ModeToggle />
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
