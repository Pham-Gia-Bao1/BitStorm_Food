"use client";
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

export default ModeToggle;
