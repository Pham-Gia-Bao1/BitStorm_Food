"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { Button, Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useTheme, ThemeProvider as NextThemesProvider } from "next-themes";
import SideBar from "@/components/layout/sidebar/SideBar";
import SubSidebar from "@/components/layout/SubSideBar";
import Avatar from "@mui/material/Avatar";
import MainLogo from "@/components/logo/MainLogo";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/components/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children, ...props }: any) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  if (!token) {
    router.push("/login");
  }

  return (
    <html lang="en">
      <CartProvider>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className={`min-h-screen ${theme}`}>
              <div className={`flex ${theme}`}>
                <div className="flex flex-1 flex-col relative">
                  <Header />
                  <main className={`flex-1 flex ${theme}`}>
                    <div
                      className={`z-30 fixed top-0 left-0 bottom-0 ${theme}`}
                    >
                      <SideBar />
                    </div>
                    <div
                      className={`flex-0 z-20 ml-20 fixed top-16 bottom-0 ${theme}`}
                    >
                      <SubSidebar />
                    </div>
                    <div className={`flex-1 ml-72 pl-3 w-96 ${theme}`}>
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </CartProvider>
    </html>
  );
}
