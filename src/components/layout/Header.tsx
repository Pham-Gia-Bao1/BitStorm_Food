'use client'
import { useTheme } from "next-themes";
import { Button, Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import MainLogo from "@/components/logo/MainLogo";

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
      className={`${theme} sm:w-50 p-4 fixed top-0 left-0 right-0 h-19 flex justify-between header_main_layout`}
    >
      <MainLogo />
      <div className="flex items-center">
        <ModeToggle />
        <Avatar
          className="mr-10"
          alt="User Avatar"
          src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          sx={{ width: 24, height: 24 }}
        />
      </div>
    </header>
  );
};

export default Header;
